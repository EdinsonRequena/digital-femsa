import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import type {StyleProp} from 'react-native';

type Props = {
  month: string;
  pts: number;
  style?: StyleProp<any>;
};

export const Card = ({month, pts, style}: Props): JSX.Element => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.month}>{month}</Text>
      <Text style={styles.pts}>{pts} pts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#334FFA',
    width: 286,
    height: 143,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  month: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 21.86,
    fontFamily: 'Avenir',
    margin: 16,
  },
  pts: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 32,
    lineHeight: 43.71,
    fontFamily: 'Avenir',
    textAlign: 'center',
    top: -8,
  },
});
