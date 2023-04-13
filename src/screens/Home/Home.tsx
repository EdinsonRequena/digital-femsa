import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import PContext from '../../context/PContext';
import {ROUTES} from '../../router/routes';

import {ButtonComponent} from '../../components/Button/Button';
import {Header} from './Header';
import {Card} from './Card';
import {Table} from './Table';

import {Product} from 'utils/types';

export const Home = () => {
  const {setSelectedProduct, products} = useContext(PContext);

  const navigation = useNavigation();

  const goToDetail = (product: Product) => {
    setSelectedProduct(product);
    navigation.navigate(ROUTES.DETAIL_PRODUCT, {
      productName: product?.product,
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header style={styles.header} user="Edinson Requena" />
        <Text style={styles.text}>TUS PUNTOS</Text>
        <Card style={styles.card} month="Diciembre" pts="10.000,00" />
        <Text style={styles.text}>TUS MOVIMIENTOS</Text>
        {products.map(product => (
          <Table
            key={product.id}
            product={product.product}
            createdAt={product.createdAt}
            points={product.points}
            image={product.image}
            onPress={goToDetail}
          />
        ))}
        <ButtonComponent style={styles.button} title="Hola" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  header: {
    margin: 16,
    alignSelf: 'flex-start',
  },
  text: {
    fontFamily: 'Avenir',
    fontWeight: '800',
    alignSelf: 'flex-start',
    color: '#9B9898',
    fontSize: 14,
    lineHeight: 19.12,
    margin: 8,
    marginLeft: 20,
  },
  card: {
    margin: 16,
  },
  button: {
    padding: 16,
  },
});
