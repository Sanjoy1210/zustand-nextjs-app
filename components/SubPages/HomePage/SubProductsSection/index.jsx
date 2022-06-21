import React, { useEffect } from 'react';
import useStore from '../../../../store/store';
import Product from '../../../common/ProductCard/ProductCard';
import ProductSkeletonCard from '../../../common/ProductCard/ProductSkeletonCard';

const SubProductsSection = () => {
  const { products, fetchProducts } = useStore((state) => state);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {!products?.length
          ? Array.from({ length: 20 }, (_, i) => i + 1).map((ar, i) => (
              <ProductSkeletonCard key={i} />
            ))
          : products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
      </div>
    </>
  );
};

export default SubProductsSection;
