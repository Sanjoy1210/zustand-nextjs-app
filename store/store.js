import create from 'zustand';
import { devtools } from 'zustand/middleware';
import cartSlice from './slices/cartSlice';
import productsSlice from './slices/productsSlice';

const useStore = create(
  devtools(
    (set, get) => ({
      ...productsSlice(set, get),
      ...cartSlice(set, get),
    }),
    { name: 'Fake Store' }
  )
);

export default useStore;
