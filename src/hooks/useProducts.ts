// Vendors
import {useContext, useState} from 'react';

// Context
import PContext, {ProductContextProps} from '../context/PContext';

// Types
import {Product} from '../utils/types';

interface UseProductsReturnType extends ProductContextProps {
  filterRedemptionProducts: (redemptionStatus: boolean) => void;
  filteredProducts: Product[];
  resetFilter: () => void;
}

export const useProducts = (): UseProductsReturnType => {
  const context = useContext(PContext);

  if (!context) {
    throw new Error('useProducts must be used within a PProvider');
  }

  const [filteredProducts, setFilteredProducts] = useState<Array<Product>>(
    context.products,
  );

  const filterRedemptionProducts = (redemptionStatus: boolean) => {
    const filter = context.products.filter(
      product => product.is_redemption === redemptionStatus,
    );

    setFilteredProducts(filter);
  };

  const resetFilter = () => setFilteredProducts(context.products);

  return {
    ...context,
    filterRedemptionProducts,
    filteredProducts,
    resetFilter,
  };
};
