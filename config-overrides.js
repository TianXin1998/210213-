/*
 * @Author: 田鑫
 * @Date: 2021-02-13 15:55:18
 * @LastEditTime: 2021-02-13 16:23:50
 */
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' }
  })
);