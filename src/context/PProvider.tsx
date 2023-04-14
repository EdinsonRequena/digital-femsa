import React, {useState, useEffect, useCallback} from 'react';

import PContext from './PContext';

import {getProducts} from '../utils/api';

import type {Product} from '../utils/types';

type Props = {
  children?: React.ReactNode;
};

const PProvider = ({children}: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSetProducts = useCallback((data: Product[]) => {
    setProducts(data);
  }, []);

  const handleSelectProduct = useCallback((product: Product) => {
    setSelectedProduct(product);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      handleSetProducts(data);
    };

    fetchProducts();
  }, [handleSetProducts]);

  return (
    <PContext.Provider
      value={{
        products,
        setProducts: handleSetProducts,
        selectedProduct,
        setSelectedProduct: handleSelectProduct,
      }}>
      {children}
    </PContext.Provider>
  );
};

export default PProvider;
