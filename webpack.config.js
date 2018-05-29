// const path = require('path');
// module.exports = require('@talentui/webpack-config')({
//     entry: {
//         'reactapp': './app.js'
//     }, //必须，应用程序入口，可以使用talent-ui-bootstrap
//     // dllList: ['@talentui/dll-react'], //可选，dll列表，
//     useLint: false, //可选， 是否启用lint检查
//     moduleScope: './src',
//     language: 'mixed', //可选，default 'js' 可选 'ts', 'mixed',
//     // transformInclude: ['es6.map','es6.object.assign'],

    
//     port: 3002,
//     // host: "127.0.0.1",
//     // targetBrowsers: 'ie >= 9', //可选，默认chrome 58 浏览器支持设置，最低ie9
//     // transformExclude: ['es6.map'] //排除的polyfill和plugin
//     alias: {  //webpack alias配置
//         // "react": "preact-compat",
//         // "react-dom": "preact-compat"
//         "&vender": path.resolve(process.cwd(), './src/venders')
//     }
// })

const path = require('path');
module.exports = require('@talentui/webpack-config')({
    entry: {
      'reactapp': './main.js'
    },  //必须，应用程序入口，可以使用talent-ui-bootstrap
    // entry: './entry.js',
    // dllList: ['@talentui/dll-react'], //可选，dll列表，
    useLint: false, //可选， 是否启用lint检查
    moduleScope: './src',
    language: 'mixed', //可选，default 'js' 可选 'ts', 'mixed',
    // transformInclude: ['es6.map','es6.object.assign'],
    useCommonChunk: false,
    port: 3001,
    outputUseHash: false,
    // host: "127.0.0.1",
    // targetBrowsers: 'ie >= 9', //可选，默认chrome 58 浏览器支持设置，最低ie9
    // transformExclude: ['es6.map'] //排除的polyfill和plugin
    alias: {  //webpack alias配置
        // "react": "preact-compat",
        // "react-dom": "preact-compat"
        "&vender": path.resolve(process.cwd(), './src/venders')
    }
})
