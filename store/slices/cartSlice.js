const cartSlice = (set, get) => ({
  cart: [],
  addToCart: (productId) => {
    const exists = get().cart.find((product) => product.id === productId);
    if (!exists) {
      set(
        (state) => ({
          cart: [
            ...new Set([
              ...state.cart,
              {
                ...get().products.find((product) => product.id === productId),
                isFavorite: true,
              },
            ]),
          ],
        }),
        false,
        'action/addToCart'
      );
    }
  },
  removeFromCart: (productId) => {
    const exists = get().cart.find((product) => product.id === productId);
    if (exists) {
      const restCart = get().cart.filter((product) => product.id !== productId);
      set(
        (state) => ({
          cart: restCart,
        }),
        false,
        'action/removeFromCart'
      );
    }
  },
});

export default cartSlice;
