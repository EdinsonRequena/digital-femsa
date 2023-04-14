import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

import {Product} from '../../../utils/types';
import {formatDate} from '../../../utils/date';

interface Props extends Product {
  onPress: (product: Product) => void;
}

export const Table = ({
  product,
  id,
  createdAt,
  is_redemption,
  points,
  image,
  onPress,
}: Props): JSX.Element => {
  const _onPress = () => {
    onPress({id, product, createdAt, is_redemption, points, image});
  };

  return (
    <Pressable testID="pressable-element" onPress={_onPress} style={styles.row}>
      <Image testID="table-image" source={{uri: image}} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{product}</Text>
        <Text style={styles.createdAt}>{formatDate(createdAt)}</Text>
      </View>
      <View style={styles.contentPrice}>
        <Text
          style={[
            styles.price,
            !is_redemption ? styles.positive : styles.negative,
          ]}>
          {!is_redemption ? '+' : '-'}
        </Text>
        <Text style={styles.price}> {points}</Text>
        <Text style={[styles.price, styles.chevron]}>{'>'}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  image: {
    width: 55,
    height: 55,
    marginRight: 16,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    marginRight: 16,
  },
  name: {
    fontWeight: '800',
    fontSize: 14,
    marginBottom: 7,
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
  positive: {
    color: '#00B833',
  },
  negative: {
    color: '#FF0000',
  },
  chevron: {
    marginLeft: 12,
  },
  contentPrice: {
    display: 'flex',
    flexDirection: 'row',
  },
  price: {
    color: '#000000',
    fontWeight: '800',
    fontFamily: 'Avenir',
    fontSize: 16,
  },
});
