import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import productImage from '../../../../assets/product.png';

type ImageCardProps = {
  src?: string;
};

const ImageCard = ({src = productImage}: ImageCardProps): JSX.Element => {
  return (
    <View style={styles.card}>
      <Image
        testID="image-card-image"
        source={{uri: src}}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 354,
    height: 350,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default ImageCard;
