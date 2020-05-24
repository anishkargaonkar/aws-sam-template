import { resolve } from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
	entry: {
		hello: './src/handlers/hello.ts',
		goodbye: './src/handlers/goodbye.ts',
	},
	output: {
		filename: '[name].js',
		libraryTarget: 'commonjs2',
		path: resolve(__dirname, 'build'),
	},
	module: {
		rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
	},
	resolve: {
		extensions: ['.js', '.ts'],
	},
	target: 'node',
	mode: process.env.NODE_ENV === 'dev' ? 'development' : 'production',
};

export default config;
