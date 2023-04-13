import React from 'react';

import RootNavigator from './src/router';
import PProvider from './src/context/PProvider';

const App = () => {
  return (
    <PProvider>
      <RootNavigator />
    </PProvider>
  );
};

export default App;
