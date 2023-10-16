const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports ={
	entry			: {
		app			: './App/index.jsx'
	},

	output			: {
		filename	: "[name].bundle.js",
		path		: path.resolve(__dirname, 'dist'),
		publicPath	: '/public/',
	},

	module			: {
		rules		: [
			{
				test	: /\.(js|jsx)$/,
				exclude	: /node_modules/,
				use		: "babel-loader"
			},
			{
				test	: /\.css$/,
				use		: ["style-loader", "css-loader"]
			},
			{
				test	: /\.html$/,
				use		: "html-loader"
			},
			{
				test	: /\.(webp|png|jpeg|jpg)$/,
				type	: "asset/resource"
			}
		]},

	plugins			: [
		new HTMLWebpackPlugin({ template: "index.html" })
	],

	optimization	: {
		minimize	: true,
		splitChunks	: {
			chunks	: 'all'
		}
	}
};
