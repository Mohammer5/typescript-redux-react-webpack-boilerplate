import * as path from 'path';

export const getOutputConfig = (rootDir, outputDir) => ({
  filename: '[name].js',
  path: path.join(rootDir, outputDir),
	publicPath: path.join(__dirname, '..', 'dist'),
});
