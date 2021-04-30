import {parse} from '@vue/compiler-sfc';
import {compile} from '@vue/compiler-dom';
import {walk} from './walk';
import {compileScript, compileStyles}  from './genrate';



function transformSrcCode (code, options) {
  const descriptor = parse(code).descriptor
  const {ast} = compile(descriptor.template.content)
  const reg = /-(\w)/g
  let sourceComp = options.map(cur => ({
    url: cur.libraryName,
    reg: new RegExp(cur.elementTagReg),
    names: new Set()
  }))
  walk(ast, {
    enter (node) {
      if (node.tagType && node.tagType === 1) { // tagType:1 组件标识
        sourceComp.forEach(cmp => {
          if (cmp.reg.test(node.tag)) {
            // el-table ---> ElTable
            const str = node.tag.replace(reg, (_, $1) => $1.toUpperCase())
            cmp.names.add(str.slice(0, 1).toUpperCase() + str.slice(1))
          }
        })
      }
    }
  })
  sourceComp = sourceComp.filter(cur => cur.names.size)
  sourceComp.forEach(cur => {
    cur.names = [...cur.names].map(name => ({key: 'normal', name}))
  })
  console.log('sourceComp', sourceComp)
  if (!sourceComp.length) {
    return code
  }
  const scriptSource = compileScript(descriptor.script.content, sourceComp)
  const templateSource = descriptor.template.content
  const stylesSource = compileStyles(descriptor.styles)
  const tpl = `
  <template>
    ${templateSource}
  </template>
  <script>
    ${scriptSource}
  </script>
  ${stylesSource}
  `
  console.log(tpl)
  return tpl
}

export default transformSrcCode

