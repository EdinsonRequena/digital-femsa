import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {Product} from '../../../utils/types';

interface Props extends Product {
  onPress: (product: Product) => void;
}

export const Table = ({
  product,
  createdAt,
  points,
  image,
  onPress,
}: Props): JSX.Element => {
  const _onPress = () => {
    console.log(image);
    onPress({product, createdAt, points, image});
  };

  return (
    <View style={styles.row}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{product}</Text>
        <Text style={styles.createdAt}>{createdAt}</Text>
      </View>
      <Pressable onPress={_onPress}>
        <Text style={styles.price}>
          +{points} {'>'}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    backgroundColor: '#fff',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  info: {
    flex: 1,
    marginRight: 16,
  },
  name: {
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19.12,
    marginBottom: 4,
    fontFamily: 'Avenir',
    color: '#000000',
  },
  createdAt: {
    color: '#000000',
    fontFamily: 'Avenir',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16.39,
    marginBottom: 4,
  },
  price: {
    color: '#000000',
    fontWeight: '800',
    fontFamily: 'Avenir',
    size: 16,
    lineHeight: 21.86,
    fontSize: 18,
  },
});
