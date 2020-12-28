const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.jsx',
	module: {
		rules: [
			{
				test: /\.(js|mjs|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(tsx|ts)?$/,
				use: 'ts-loader'
			},
			{
				test: /\.(ttf|eot|woff|woff2|svg|ttf)$/,
				use: 'file-loader'
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							name: 'assets/[name][hash:8].[ext]'
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader', // creates style nodes from JS strings
					},
					{
						loader: 'css-loader', // translates CSS into CommonJS
					}
				]
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader', // creates style nodes from JS strings
					},
					{
						loader: 'css-loader', // translates CSS into CommonJS
					},
					{
						loader: 'less-loader', // compiles Less to CSS
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader', // creates style nodes from JS strings
					},
					{
						loader: 'css-loader', // translates CSS into CommonJS
					},
					{
						loader: 'scss-loader', // compiles Less to CSS
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.mjs', '.jsx', '.tsx', '.ts'],
	},
	target: 'web',
	// 插件
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: 'public/index.html'
		})
	],
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		open: true,
		compress: true,
		port: 9999,
		writeToDisk: true
	}
}