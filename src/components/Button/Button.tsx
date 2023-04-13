import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

import type {StyleProp} from 'react-native';

type Props = {
  title: string;
  style?: StyleProp<any>;
};

export const ButtonComponent = ({title, style}: Props): JSX.Element => {
  return <Button buttonStyle={styles.container} style={style} title={title} />;
};

const styles = StyleSheet.create({
  container: {
    width: 353,
    height: 50,
    borderRadius: 10,
    color: '#334FFA',
  },
});
