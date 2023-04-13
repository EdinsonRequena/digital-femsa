import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

type Props = {
  product: string;
  createdAt: string;
  points: string;
  image: string;
};

export const Table = ({
  product,
  createdAt,
  points,
  image,
}: Props): JSX.Element => {
  return (
    <View style={styles.row}>
      <Image source={image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{product}</Text>
        <Text style={styles.createdAt}>{createdAt}</Text>
      </View>
      <Text style={styles.price}>
        +{points} {'>'}
      </Text>
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
