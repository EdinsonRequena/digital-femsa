import React from 'react';
import {View, Text} from 'react-native';

import {ButtonComponent} from '../../components/Button/Button';
import {Header} from './Header';
import {Card} from './Card';

export const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Header user="Edinson Requena" />
      <Card month="Diciembre" pts="10.000,00" />
      <Text />
      <ButtonComponent title="Hola" />
    </View>
  );
};
