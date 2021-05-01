import common from './common'

const gb = [
  '首页-gb',
  '关于我们-gb'
]
const gbOb = {}
common.forEach((key, idx) => {
  gbOb[key] = gb[idx]
})
export default gbOb