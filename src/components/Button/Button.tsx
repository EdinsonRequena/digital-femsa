import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

import type {StyleProp} from 'react-native';

type Props = {
  title: string;
  style?: StyleProp<any>;
  onPress: () => void;
};

export const ButtonComponent = ({
  title,
  onPress,
  style,
}: Props): JSX.Element => {
  return (
    <Button
      onPress={onPress}
      containerStyle={style}
      buttonStyle={styles.container}
      style={style}
      title={title}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#334FFA',
  },
});
