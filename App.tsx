// Vendors
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Routes
import RootNavigator from './src/router';

// Context
import PProvider from './src/context/PProvider';

const App = () => {
  return (
    <PProvider>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </PProvider>
  );
};

export default App;
