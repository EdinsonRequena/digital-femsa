import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {formatDate} from '../../utils/date';

import ImageCard from './ImageCard';

import {useProducts} from '../../hooks/useProducts';

import {ButtonComponent} from '../../components/Button/Button';

export const DetailProduct = (): JSX.Element => {
  const {selectedProduct} = useProducts();

  const {goBack} = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <ImageCard src={selectedProduct?.image} />
        <View style={styles.infoContent}>
          <Text style={styles.label}>Detalles del producto:</Text>
          <Text style={styles.date}>
            Comprado el {formatDate(selectedProduct?.createdAt)}
          </Text>
          <Text style={styles.label}>Con esta compra acumulaste:</Text>
          <Text style={styles.points}>{selectedProduct?.points}</Text>
          <ButtonComponent
            style={styles.button}
            onPress={goBack}
            title="Aceptar"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const baseStyles = StyleSheet.create({
  text: {
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: '800',
  },
});

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: 354,
    alignItems: 'center',
  },
  button: {
    width: 354,
  },
  infoContent: {
    marginTop: 32,
    alignSelf: 'flex-start',
  },
  label: {
    ...baseStyles.text,
    fontSize: 14,
    color: '#9B9898',
    marginTop: 20,
    lineHeight: 19,
  },
  date: {
    ...baseStyles.text,
    fontSize: 16,
    color: '#000000',
    marginTop: 20,
    lineHeight: 22,
  },
  points: {
    ...baseStyles.text,
    fontSize: 24,
    color: '#000000',
    marginTop: 32,
    marginBottom: 33,
  },
});
