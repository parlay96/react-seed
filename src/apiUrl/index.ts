const proxyAddress = '/' + 'reactSeed/erp' // 开发环境
// const proxyAddress = '/erp' // 线上环境
const publics = {
  customerList: proxyAddress + '/customer' // 客户列表接口
}
export default Object.assign({}, publics)
