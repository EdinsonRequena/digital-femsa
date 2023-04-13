import React, {useState, useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import PContext from './PContext';

import {getProducts} from '../utils/api';

import type {Product} from '../utils/types';

type Props = {
  children?: React.ReactNode;
};

const PProvider = ({children}: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleSetProducts = (data: Product[]) => {
    setProducts(data);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      handleSetProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <PContext.Provider
      value={{
        products,
        selectedProduct,
        setProducts: handleSetProducts,
        setSelectedProduct: handleSelectProduct,
      }}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </PContext.Provider>
  );
};

export default PProvider;
