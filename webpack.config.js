const path = require("path")
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
//引入clean插件
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        environment: {
            arrowFunction: false,
            const: false //兼容ie10
        },
        clean: true
    },
    module: {
        rules: [{
                test: /\.ts$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env',
                                {
                                    targets: {
                                        "chrome": "58",
                                        "ie": "11"
                                    },
                                    "corejs": "3",
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ]
                    }
                }, 'ts-loader'],
                exclude: /node-modules/
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    //  引入postcss
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions', //兼容每个浏览器最新的两个版本
                                        }
                                    ]
                                ]
                            }
                        }

                    },
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: "这是一个自定义的title"、
            template: "./src/index.html"
        }),
    ],
    // 用来设置引用模块，可以将这些文件识别为模块
    resolve: {
        extensions: ['.ts', '.js']
    },
    mode: "development", //设置mode
}