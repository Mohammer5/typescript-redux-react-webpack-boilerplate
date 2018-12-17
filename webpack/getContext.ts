import * as path from 'path';

export const getContext = (rootDir, contextPath) =>
  path.join(rootDir, contextPath);
