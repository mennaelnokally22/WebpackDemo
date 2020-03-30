const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');
module.exports=merge(common,{
    "devtool":"none",
    mode:"production",
    output :{
        filename:"[name].[contenthash].bundle.js",
        path: path.resolve(__dirname,"build")
    }
    ,
    module:{
        rules:[
            {
                test:/\.css$/,
                loader:[
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                    ]
            },
            {
                test:/\.scss$/,
                loader:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                    ]
            },

            {
                test:/\.(svg|png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            esModule: false,
                            limit: 20000
                        }
                    },
                    "image-webpack-loader"
                                       
                ]
            },
            
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },

            
        ]
    },
    optimization:{
        minimizer:[
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template:'index.html',
                favicon:'favicon.ico',
                minify:{
                    removeAttributeQuotes:true,
                    collapseWhitespace:true,
                    removeComments:true
                }
            }),
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        
        new MiniCssExtractPlugin({
            filename:"[name].[contentHash].css"
        })
    ]

})