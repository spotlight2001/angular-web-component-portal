const webpack = require('webpack');
console.log('checking process.env.WEB_COMPONENT_URL_TYPE=' + process.env.WEB_COMPONENT_URL_TYPE)
const webComponentUrlType = process.env.WEB_COMPONENT_URL_TYPE || 'dev'
console.log('using webComponentUrlType=' + webComponentUrlType)
module.exports = {
    plugins: [
        
        new webpack.DefinePlugin({
            "WEB_COMPONENT_URL_TYPE": JSON.stringify(webComponentUrlType)
        })
    ]
}