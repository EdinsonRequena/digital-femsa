// Vendors
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

// Routes
import {ROUTES} from '../../router/routes';

// Components
import {ButtonComponent} from '../../components/Button/Button';
import {Header} from './Header';
import {Card} from './Card';
import {Table} from './Table';

// Hooks
import {useProducts} from '../../hooks/useProducts';

// Types
import {Product} from 'utils/types';

export const Home = () => {
  const {setSelectedProduct, products} = useProducts();

  const navigation = useNavigation();

  const goToDetail = (product: Product) => {
    setSelectedProduct(product);
    navigation.navigate(ROUTES.DETAIL_PRODUCT, {
      productName: product?.product,
    });
  };

  const totalPoints = products
    .filter(product => product.is_redemption === true)
    .reduce((acc, product) => acc + product.points, 0);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header style={styles.header} user="Edinson Requena" />
        <Text style={styles.text}>TUS PUNTOS</Text>
        <Card style={styles.card} month="Diciembre" pts={totalPoints} />
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
        <ButtonComponent style={styles.button} title="Canjeados" />
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
