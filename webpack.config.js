const path = require('path');
module.exports={
    entry:'./src/app.js',
    output:{
        path:path.resolve(__dirname,'dist'),//这里要绝对路径
        filename:'main.js',//输出的js文件名字
    }
}