import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useStore from '../../store/store';

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;
  const { selectedProduct, product, removeSelectedProduct } = useStore(
    (state) => state
  );

  useEffect(() => {
    selectedProduct(productId);

    return () => removeSelectedProduct();
  }, [selectedProduct, productId, removeSelectedProduct]);

  return (
    <div>
      {!product ? <div>Loading...</div> : <p>{product?.description}</p>}
    </div>
  );
};

export default ProductDetails;
