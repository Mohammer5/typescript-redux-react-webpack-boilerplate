import * as path from 'path';
import { getMainConfig } from './mainConfig';
import { getClientConfig } from './getClientConfig';
import { getServerConfig } from './getServerConfig';

const HANDLE_CLIENT_FILES = false;
const HANDLE_SERVER_FILES = false;

const exportConfigs = [];
const PROJECT_PATH = path.join(__dirname, '..');
const mainConfig = getMainConfig(PROJECT_PATH, 'development');

if (HANDLE_CLIENT_FILES) {
  const CLIENT_ENTRY_FILE_PATH = 'src';
  const clientEntryFiles = [ 'client.ts' ];
  const clientConfig = getClientConfig(PROJECT_PATH, CLIENT_ENTRY_FILE_PATH, clientEntryFiles);
  exportConfigs.push({ ...mainConfig, ...clientConfig });
}

if (HANDLE_CLIENT_FILES) {
  const SERVER_ENTRY_FILE_PATH = 'src';
  const serverEntryFiles = [ 'server.ts' ];
  const serverConfig = getServerConfig(PROJECT_PATH, SERVER_ENTRY_FILE_PATH, serverEntryFiles);
  exportConfigs.push({ ...mainConfig, ...serverConfig });
}

// tslint:disable:no-default-export
export default exportConfigs;
