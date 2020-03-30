//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');
module.exports=merge(common,{
    "devtool":"source-map",
    mode:"development",
    
    module:{
        rules:[
            {
            test:/\.css$/,
            loader:[
                "style-loader",
                "css-loader"
                ]
            },
            {
            test:/\.scss$/,
            loader:[
                "css-loader",
                "sass-loader"
                ]
            },
           
            {
                test:/\.(svg|png|jpg|jpeg|gif)$/,
                use:{
                    loader:"file-loader",
                    options:{
                        name:"[name].[hash].[ext]",
                        outputPath:"imgs",
                        esModule:false
                    }
                }
            },
            
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html',
            favicon:'favicon.ico'
        }),
    ]

})