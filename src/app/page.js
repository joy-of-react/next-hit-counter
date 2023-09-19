import React from "react";

import { readFile, writeFile } from "../helpers/file-helpers";

const DATABASE_PATH = "/src/database.json";

function Home() {
  const db = JSON.parse(readFile(DATABASE_PATH));
  db.hits++;
  writeFile(DATABASE_PATH, JSON.stringify(db));

  return (
    <main>
      <h1>Welcome!</h1>
      <p>You are visitor number {db.hits}.</p>
    </main>
  );
}

export default Home;
