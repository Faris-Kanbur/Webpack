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
        filename: 'js/main.[hash]js', // [name].[hash]
        publicPath: '/assets/',
        // libraryTarget : 'amd',  // var-amd-commonjs-
        // library: 'myfirstlibrary',
        
    },
    devServer: {  // it keeps in memory in ram
        port: 1234,
        contentBase: path.join(__dirname, 'dist'),
        writeToDisk: false // if you want to see what is write on the disk you can write like that because as defalt is is false
    }

    

}