"use strict";
const path = require('path');                                       
const HtmlWebpackPlugin = require('html-webpack-plugin'); // href, Link
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Extract Css and JS
const TerserPlugin = require('terser-webpack-plugin'); // Uglify
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


const MODE = process.env.MODE.trim().toLowerCase() == 'development' ? 'development' : 'production';
module.exports = {    
    mode : MODE,
    entry: {
        main : path.resolve(__dirname ,'./src', 'index.js'),
    },
    output: {                                           
        path: path.join(__dirname, '/build'),    
        filename: 'static/js/[name].[hash].js'
    },
    devServer :{
        host : 'localhost',
        port : 4000,
        hot : true,
        inline : true,
        overlay : true,
        open : true,
        historyApiFallback: true,

    },
    optimization :{
        minimize : true,
        minimizer : [
            new TerserPlugin({
                // https://github.com/terser/terser
                terserOptions :{
                    parse : {
                        ecma :8,
                    },
                    compress : {
                        ecma : 5,
                        warnings : false,
                        comparisons : false,
                        inline : 2,
                    },
                    mangle : {
                        safari10 : true,
                    },
                    output : {
                        ecma : 5,
                        comments : false,
                        // https://github.com/facebook/create-react-app/issues/2488
                        ascii_only : true,
                    },
                }
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessOptions : {
                    
                }
            })
        ],
        splitChunks:{
                chunks :'all',
                name:false,
        },
        runtimeChunk : false,       
        
    },
    module: {                                          
        rules: [
            // React Babel Loader
            {
                test: /\.(js|jsx)$/,                         
                exclude: [/node_module/],                 
                use:[
                    {
                        loader: 'babel-loader'				
                    }
                ],
            
            },
            // CSS Loader
            {
                test :/\.css$/,
                use : [MiniCssExtractPlugin.loader, 'css-loader']               
            },
            {
                test : /\.(scss|sass)$/,
                loader : 'sass-loader'
            },
            // File Loader
            {
                test : /\.(ico|png|jpg|jpeg|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader : 'url-loader',
                options: {
                    name :'static/image/[hash].[ext]',
                    limit : 10000,
                }
            },
            
            {
                test: /\.(woff(2)?|ttf|eot|svg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      name: '[name].[ext]',
                      fallback : 'file-loader',
                      outputPath: 'static/fonts/'
                    }
                  }
                ]
            },              
        ]
    },
    
    plugins: [
        // https://stackoverflow.com/questions/52381345/webpack-minify-htmlwebpackplugin

        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename : 'index.html',        
            minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true,            
            }
        }),
        new MiniCssExtractPlugin({
            filename : 'static/css/[name].[hash:8].css',
            chunkFilename : "static/css/[id].[hash:8].css"
        }),
        new CleanWebpackPlugin(),
        new WebpackManifestPlugin(),

    ],
    
}