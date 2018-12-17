import { getOutputConfig } from './getOutputConfig';
import { getEntryFiles } from './getEntryFiles';
import { getContext } from './getContext';

export const getClientConfig = (rootDir, entryFilesPath, fileNames = []) => ({
  name: 'client',
  entry: getEntryFiles(rootDir, entryFilesPath, getContext(rootDir, entryFilesPath), fileNames),
  output: getOutputConfig(rootDir, 'dist'),
});
