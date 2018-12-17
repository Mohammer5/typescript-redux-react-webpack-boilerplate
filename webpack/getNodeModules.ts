import * as fs from 'fs';
import * as path from 'path';

export const getNodeModules = rootDir => fs
  .readdirSync(path.join(rootDir, 'node_modules'))
  .filter(name => name !== '.bin')
  .reduce((modules, name) => ((modules[name] = 'commonjs ' + name) && modules), {});
