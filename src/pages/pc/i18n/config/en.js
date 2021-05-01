import common from './common'

const en = [
  'Home',
  'About'
]
const enOb = {}
common.forEach((key, idx) => {
  enOb[key] = en[idx]
})
export default enOb