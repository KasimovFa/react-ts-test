import path from 'path';
import {Configuration, DefinePlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const webpackConfig = (): Configuration => ({
    entry: './src/index.tsx',
    ...(process.env.production || !process.env.development
        ? {}
        : {devtool: 'eval-source-map'}),

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        plugins: [new TsconfigPathsPlugin({configFile: './tsconfig.json'})],
        
    },
    output: {
        path: path.join(__dirname, '/build'),
        publicPath: '/',
        filename: 'build.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
                exclude: /build/,
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
        ],
    },
    devServer: {
        port: 3000,
        open: true,
        contentBase: path.resolve(__dirname, 'build'),
        compress: false,
        historyApiFallback: true,
        /*historyApiFallback:{
            index:'build/index.html'
        },*/
    },
    plugins: [
        new HtmlWebpackPlugin({
            // HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
            template: './public/index.html',
        }),
        // DefinePlugin allows you to create global constants which can be configured at compile time
        new DefinePlugin({
            'process.env': process.env.production || !process.env.development,
        }),
        new ForkTsCheckerWebpackPlugin({
            // Speeds up TypeScript type checking and ESLint linting (by moving each to a separate process)
            eslint: {
                files: './src/**/*.{ts,tsx,js,jsx}',
            },
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css', // Формат имени файла
        })
    ],
});

export default webpackConfig;
