import React from 'react';
import SubProductsSection from '../components/SubPages/HomePage/SubProductsSection';
import useStore from '../store/store';

const Home = () => {
  const { cart } = useStore((state) => state);

  return (
    <div className="bg-gray-50">
      <h1 className="text-2xl text-red-500 font-bold">Welcome to Fake Store</h1>
      <h3 className="text-lg font-bold">Cart: {cart.length}</h3>
      <SubProductsSection />
    </div>
  );
};

export default Home;
