const path = require('path')

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        // filename: 'build.js' if we write like this it is going to create file in dist
        // filename: '../build/build.js'if we write like this it is going to create new doc and file in doc
        
        path: path.resolve(__dirname, 'build'),
        // filename: 'build.js'
        filename: 'js/build.js'
    
    }

    

}