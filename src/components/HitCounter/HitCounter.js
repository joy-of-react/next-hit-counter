import React from 'react';

import {
  readFile,
  writeFile,
} from '../../helpers/file-helpers';

const DATABASE_PATH = '/src/database.json';

function HitCounter() {
  let { hits } = JSON.parse(
    readFile(DATABASE_PATH)
  );

  hits += 1;

  writeFile(
    DATABASE_PATH,
    JSON.stringify({ hits })
  );

  return hits;
}

export default HitCounter;
