import React from 'react';
import {View, Text, ScrollView, StyleSheet, SafeAreaView} from 'react-native';

import {ButtonComponent} from '../../components/Button/Button';
import {Header} from './Header';
import {Card} from './Card';
import {Table} from './Table';

const productsMock = [
  {
    product: 'Product Name',
    createdAt: '26 de enero, 2019',
    points: '100',
    image: require('../../assets/placeholder.png'),
    id: 1,
  },
  {
    product: 'Product Name',
    createdAt: '26 de enero, 2019',
    points: '100',
    image: require('../../assets/placeholder.png'),
    id: 2,
  },
  {
    product: 'Product Name',
    createdAt: '26 de enero, 2019',
    points: '100',
    image: require('../../assets/placeholder.png'),
    id: 3,
  },
  {
    product: 'Product Name',
    createdAt: '26 de enero, 2019',
    points: '100',
    image: require('../../assets/placeholder.png'),
    id: 4,
  },
  {
    product: 'Product Name',
    createdAt: '26 de enero, 2019',
    points: '100',
    image: require('../../assets/placeholder.png'),
    id: 5,
  },
  {
    product: 'Product Name',
    createdAt: '26 de enero, 2019',
    points: '100',
    image: require('../../assets/placeholder.png'),
    id: 6,
  },
];

export const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Header style={styles.header} user="Edinson Requena" />
          <Text style={styles.text}>TUS PUNTOS</Text>
          <Card style={styles.card} month="Diciembre" pts="10.000,00" />
          <Text style={styles.text}>TUS MOVIMIENTOS</Text>
          {productsMock.map(product => (
            <Table
              key={product.id}
              product={product.product}
              createdAt={product.createdAt}
              points={product.points}
              image={product.image}
            />
          ))}
          <ButtonComponent style={styles.button} title="Hola" />
        </View>
      </ScrollView>
    </SafeAreaView>
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
