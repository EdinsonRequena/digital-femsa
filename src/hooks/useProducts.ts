import {useContext, useEffect, useState} from 'react';

import PContext, {ProductContextProps} from '../context/PContext';

import {Product} from '../utils/types';

interface UseProductsReturnType extends ProductContextProps {
  filterRedemptionProducts: (redemptionStatus: boolean) => void;
  filteredProducts: Product[];
  resetFilter: () => void;
  isFilter: boolean;
  totalPoints: number;
}

export const useProducts = (): UseProductsReturnType => {
  const context = useContext(PContext);

  if (!context) {
    throw new Error('useProducts must be used within a PProvider');
  }

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const [isFilter, setIsFilter] = useState<boolean>(false);

  const filterRedemptionProducts = (redemptionStatus: boolean) => {
    const filter = context.products.filter(
      product => product.is_redemption === redemptionStatus,
    );

    setFilteredProducts(filter);
    setIsFilter(true);
  };

  const totalPoints = context.products.reduce((acc, product) => {
    if (product.is_redemption) {
      return acc - product.points;
    }
    return acc + product.points;
  }, 0);

  const resetFilter = () => {
    setFilteredProducts(context.products);
    setIsFilter(false);
  };

  useEffect(() => {
    setFilteredProducts(context.products);
  }, [context.products]);

  return {
    ...context,
    filterRedemptionProducts,
    filteredProducts,
    resetFilter,
    isFilter,
    totalPoints,
  };
};
