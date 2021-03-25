const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin  = require('css-minimizer-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports= {
    entry: './src/index.js', //Entrada del archivo principal
    output:{
        path: path.resolve(__dirname, 'dist'), // Se crea la carpeta dist
        filename: 'bundle.js', // nombre que se le dara al archivo resultante, "Salida"
        publicPath: '/',
    },
    resolve: {//Que es lo que se va resolver, extenciones 
        extensions:['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
        },
    },
    mode: 'production',
    module:{ // Donde se van a crear las reglas que se van a tener
        rules:[
            { // Se agregan para babel
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader', // Indica que se va a preparar el archivo con babel
                }
            },
            {// Se agregan para HTML
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer:[
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    }
    

}