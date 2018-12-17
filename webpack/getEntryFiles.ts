import * as fs from 'fs';
import * as path from 'path';

export const getEntryFiles = (rootDir, entryFilePath, context, fileNames = []) => fs
  .readdirSync(context)
  .filter(name => name.match(/\.tsx?$/))
  .filter(
		name => 
		  fileNames.length === 0
		    ? true
		    : fileNames.indexOf(name) !== -1,
	)
  .reduce(
    (carry, current) => {
      carry[current.replace(/\.tsx?$/, '')] = path.join(context, current);
      return carry;
    },
    {},
  );
