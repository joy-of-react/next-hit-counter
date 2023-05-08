import React from 'react';

import Censored from '../components/Censored';
import HitCounter from '../components/HitCounter';

function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number{' '}
        <Censored>
          <HitCounter />
        </Censored>
        .
      </p>
    </main>
  );
}

export default Home;
