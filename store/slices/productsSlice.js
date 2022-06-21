const productsSlice = (set, get) => ({
  products: [],
  product: {},
  fetchProducts: async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    set((state) => ({ products: data }), false, 'action/fetchProducts');
  },
  selectedProduct: async (productId) => {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await res.json();
    set((state) => ({ product: data }), false, 'action/fetchSingleProduct');
  },
  removeSelectedProduct: () => {
    set((state) => ({ product: {} }), false, 'action/removeProduct');
  },
});

export default productsSlice;
