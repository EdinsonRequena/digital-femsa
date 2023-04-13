import React from 'react';
import {Text, View} from 'react-native';

import {ButtonComponent} from '../../components/Button/Button';

export const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hola Mundo</Text>
      <ButtonComponent title="Hola" />
    </View>
  );
};
