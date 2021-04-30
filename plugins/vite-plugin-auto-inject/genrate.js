// const arr = [
//   {
//     url: 'element-plus',
//     names: [
//       {
//         key: 'normal',
//         name: 'ElTag'
//       },
//       {
//         key: 'normal',
//         name: 'ElPagation'
//       }
//     ]
//   },
//   {
//     url: 'ant-design',
//     names: [
//       {
//         key: 'normal',
//         name: 'AntTag'
//       },
//       {
//         key: 'normal',
//         name: 'AntPagation'
//       }
//     ]
//   }
// ]
import * as t from '@babel/types';
import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';

function generateDeclaration (url, names) {
  const declaration = names.map(cur => {
    switch (cur.key) {
      case 'normal':
        return t.importSpecifier(t.identifier(cur.name), t.identifier(cur.name))
      case 'default':
        return t.importDefaultSpecifier(t.identifier(cur.name))
    }
  })
  return t.importDeclaration(declaration, t.stringLiteral(url))
}

function generateTag (names) {
  return names.map(cur => t.ObjectProperty(t.identifier(cur.name), t.identifier(cur.name), false, true))
}

function handleLogic (obProperty, componentList, path) {
  // if (!obProperty) return
  const component = obProperty.find(node => node.key.name === 'components')
  if (!componentList.length) {
    path.skip()
    return
  }
  const tagNames = componentList.map(({names}) => generateTag(names)).reduce((cur, next) => {
    cur.push(...next)
    return cur
  }, [])
  if (component) {
    component.value.properties.push(
      ...tagNames
    )
  } else {
    obProperty.push(t.objectProperty(t.identifier('components'), t.ObjectExpression(tagNames)))
  }
}


export function compileScript (code, componentList) {
  const ast = parser.parse(code, {
    sourceType: 'module',
    plugins: [
      'dynamicImport',
      'jsx'
    ]
  })
  traverse(ast, {
    ExportDefaultDeclaration (path) {
      const declaration = path.node.declaration
      let obProperty
      if (declaration.type === 'ObjectExpression') {
        obProperty = declaration.properties
      } else if (declaration.type === 'CallExpression') {
        obProperty = declaration.arguments[0].properties
      }
      if (!obProperty) return
      handleLogic(obProperty, componentList, path)
    }
  })
  const importTpl = componentList.map(({url, names}) => generateDeclaration(url, names))
  ast.program.body.unshift(...importTpl)
  return generate(ast).code
}

// 重组style内容，@todo 后期可以配置全局使用的less样式
export function compileStyles (code) {
  if (!code.length) return ''
  const source = code.reduce((cur, next) => {
    cur += `<style lang="${next.lang}" ${next.scoped ? 'scoped' : ''}>${next.content}</style>`
    return cur
  }, '')
  return source
}