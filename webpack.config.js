const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


//console.log(path.join(__dirname, "public"))
module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

        return {
        entry:'./src/app.js',
        output: {
            path: path.join(__dirname, "public"),
            filename:'bundle.js'
        },
    
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.css$/,
                use: CSSExtract.extract({
                    use:[
                        {
                            loader:'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                        // 'style-loader',
                        // 'css-loader'
                    ]
                })
            },{
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    'file-loader'
                ]
            },{
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }]
        },
        plugins:[
            CSSExtract
        ],
        // devtool: isProduction ? 'source-map':"cheap-module-eval-source-map",
        devtool: isProduction ? 'source-map':"inline-source-map",
        devServer: {
             contentBase: path.join(__dirname, "public"),
             historyApiFallback: true
        }
    
    };

}
// npm install file-loader --save-dev
//import img from './file.png'