import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import {ROUTES} from '../../router/routes';

import {ButtonComponent} from '../../components/Button/Button';
import {Header} from './Header';
import {Card} from './Card';
import {Table} from './Table';

import {Product} from 'utils/types';

import {useProducts} from '../../hooks/useProducts';

export const Home = () => {
  const {
    setSelectedProduct,
    filteredProducts,
    filterRedemptionProducts,
    isFilter,
    resetFilter,
    totalPoints,
  } = useProducts();

  const navigation = useNavigation();

  const goToDetail = (product: Product) => {
    setSelectedProduct(product);
    navigation.navigate(ROUTES.DETAIL_PRODUCT, {
      productName: product?.product,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Header style={styles.header} user="Edinson Requena" />
        <Text style={styles.text}>TUS PUNTOS</Text>
        <Card month="Diciembre" pts={totalPoints} />
        <Text style={styles.text}>TUS MOVIMIENTOS</Text>
        <View style={styles.productContainer}>
          {filteredProducts.map(product => (
            <Table key={product.id} onPress={goToDetail} {...product} />
          ))}
        </View>
        {isFilter ? (
          <ButtonComponent
            onPress={resetFilter}
            style={styles.button}
            title="Todos"
          />
        ) : (
          <View style={styles.btnContainer}>
            <ButtonComponent
              onPress={() => filterRedemptionProducts(false)}
              style={styles.midButton}
              title="Ganados"
            />
            <ButtonComponent
              onPress={() => filterRedemptionProducts(true)}
              style={styles.midButton}
              title="Canjeados"
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flexGrow: 1,
    paddingBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: 354,
    alignItems: 'center',
  },
  productContainer: {
    minHeight: 850,
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    paddingTop: 12,
  },
  header: {
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  text: {
    fontFamily: 'Avenir',
    fontWeight: '800',
    alignSelf: 'flex-start',
    color: '#9B9898',
    fontSize: 14,
    marginVertical: 20,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  midButton: {
    marginTop: 40,
    width: 170,
    margin: 7.5,
  },
  button: {
    marginTop: 40,
    width: 354,
  },
});
