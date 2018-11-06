const path = require('path');
const HWP = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry:  path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')},
    module:{
        rules:[{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"'
                }),
            }
    ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },    
    plugins:[
        new HWP(
            {template: path.join(__dirname,'/src/index.html')}
        ),
        new ExtractTextPlugin("app.css"),
    ]
}