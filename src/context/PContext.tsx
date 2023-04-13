import {createContext} from 'react';
import type {Product} from 'utils/types';

interface ProductContextProps {
  products: Product[];
  setProducts: (data: Product[]) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (data: Product) => void;
}

const PContext = createContext<ProductContextProps>({
  products: [],
  setProducts: () => {},
  selectedProduct: null,
  setSelectedProduct: () => {},
});

export default PContext;
