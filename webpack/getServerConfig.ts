import { getNodeModules } from './getNodeModules';
import { getOutputConfig } from './getOutputConfig';
import { getEntryFiles } from './getEntryFiles';
import { getContext } from './getContext';

export const getServerConfig = (rootDir, entryFilesPath, fileNames = []) => ({
  name: 'server',
  entry: getEntryFiles(rootDir, entryFilesPath, getContext(rootDir, entryFilesPath), fileNames),
  output: getOutputConfig(rootDir, 'dist'),
  target: 'node',
  externals: getNodeModules(rootDir),
});
