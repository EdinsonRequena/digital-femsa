import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

type Props = {
  user: string;
};

export const Header = ({user}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido de vuelta!</Text>
      <Text style={styles.user}>{user}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 209,
    height: 48,
  },
  title: {
    fontWeight: '800',
    fontSize: 20,
    lineHeight: 27.32,
    fontFamily: 'Avenir',
  },
  user: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21.86,
    fontFamily: 'Avenir',
  },
});
