import React from 'react';
import {View} from 'react-native';

import {ButtonComponent} from '../../components/Button/Button';
import {Header} from './Header';

export const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Header user="Edinson Requena" />
      <ButtonComponent title="Hola" />
    </View>
  );
};
