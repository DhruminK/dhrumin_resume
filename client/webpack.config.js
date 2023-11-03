const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

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
		new HTMLWebpackPlugin({ template: "index.html" }),
		new ImageMinimizerPlugin({
			minimizer : {
				implementation: ImageMinimizerPlugin.sharpMinify,
				options : {
					encodeOptions: {
						jpeg: { mozjpeg: true, quality: 65 }
					}
				}
			}
		})
	],

	optimization	: {
		minimize	: true,
		sideEffects : true,
		splitChunks	: {
			chunks	: 'all'
		}
	}
};
