import * as path from 'path';
import * as webpack from 'webpack';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';

const devServer: any = {
	hot: true,
	contentBase: path.join(__dirname, '..', 'dist'),
};

export const getMainConfig = (rootDir, env = 'production') => ({
  externals: {},

  module: {
    rules: [{
      test: /\.(sass|scss)$/,
			use: [
				MiniCssExtractPlugin.loader,
				{ loader: 'css-loader', options: { sourceMaps: true }},
				{ loader: 'sass-loader', options: { sourceMaps: true }},
			],
      // exclude: /node_modules/,
    }, {
      test: /\.ts$/,
      enforce: 'pre',
      loader: 'tslint-loader',
    }, {
      test: /\.tsx?$/,
			use: [
				{
					loader: 'ts-loader',
		    	options: {
		    		configFile: 'config-files/tsconfig.json',
		    	},
				}
			],
    }, {
      test: /\.ts/,
      use: 'source-map-loader',
      enforce: 'pre',
    }, {
      test: /\.(woff2|woff|ttf|eot|svg|otf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: "url-loader?limit=100000"
    }],
  },

  resolve: {
    modules: ['node_modules'],
    descriptionFiles: ['package.json'],
    extensions: ['.js', '.ts', '.tsx', '.css', '.scss'],
    alias: {},
  },

  plugins: [
		new MiniCssExtractPlugin({
			chunkFilename: '[name].css',
		}),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(env),
      }
    }),
		new webpack.HotModuleReplacementPlugin(),
  ],

//	optimization: {
//		splitChunks: {
//			chunks: 'all',
//		},
//	},

  node: {
    fs: 'empty',
  },

	devServer,

  devtool: 'source-map',

	mode: env,
});
