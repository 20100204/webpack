const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:'./src/app.js',
    output:{
        path:path.resolve(__dirname,'dist'),//这里要绝对路径
        filename:'main.js',//输出的js文件名字
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },{
             test:/\.(jpg|png)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:819200
                    }
                }],

            },
            {
                test:/\.(woff2?|eot|ttf|otf)$/,
                use:[{
                    loader:'url-loader'
                }]
            }
        ]
    }

}