const path = require('path')

/**
 * [hash]
 * [chunkhash]
 * [name]
 * [ıd]
 * [query]
 * [contenthash]
 */

module.exports = {
    mode: "development",
    entry: {
        myfile: "./src/engine.js"
    },
    output: {
        // filename: 'build.js' if we write like this it is going to create file in dist
        // filename: '../build/build.js'if we write like this it is going to create new doc and file in doc
        
        path: path.resolve(__dirname, 'build'),
        // filename: 'build.js'
        filename: 'js/main.js', // [name].[hash]
        publicPath: '/assets/',
        // libraryTarget : 'amd',  // var-amd-commonjs-
        // library: 'myfirstlibrary',
        
    },
    devServer: {
        port: 1234,
        contentBase: path.join(__dirname, 'dist')
    }

    

}