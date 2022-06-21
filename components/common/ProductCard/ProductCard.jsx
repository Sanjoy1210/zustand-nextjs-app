import Image from 'next/image';
import Link from 'next/link';
import useStore from '../../../store/store';
import { FaStar, FaRegStar, FaRegHeart, FaHeart } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Product = ({ id, title, price, image, category, rating }) => {
  const { addToCart, removeFromCart, cart } = useStore((state) => state);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    setIsFavourite(cart?.find((ct) => ct.id === id) ? true : false);
  }, [cart, id]);

  const handleAddToCart = () => {
    if (isFavourite) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  };

  return (
    <div className="relative flex h-full min-w-0 flex-col break-words rounded-md bg-white bg-clip-border shadow-md">
      <div>
        <div className="relative aspect-video">
          <Image src={image} alt={title} layout="fill" priority={true} />
        </div>
        <div
          className="rounded-full ml-auto -mt-4 z-50 relative mr-3 cursor-pointer h-10 w-10 bg-red-100 flex items-center justify-center"
          onClick={handleAddToCart}
        >
          {isFavourite ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-red-500" />
          )}
        </div>
      </div>
      <div className="flex-auto p-3">
        <Link href={`/products/${id}`}>
          <a className="text-xl text-gray-600 font-bold">{title}</a>
        </Link>
      </div>
      <div className="p-3 pt-0">
        <div className="flex flex-col font-semibold">
          <p>Category: {category}</p>
          <div className="grid grid-cols-2 gap-4">
            <p>
              Price: <span className="text-xl font-bold">${price}</span>
            </p>
            <div className="flex items-center ml-auto">
              {Array.from({ length: 5 }, (_, i) => i + 1).map((ar, i) =>
                parseFloat(ar) <= rating.rate ? (
                  <FaStar className="text-yellow-600" key={i} />
                ) : (
                  <FaRegStar className="text-yellow-600" key={i} />
                )
              )}
            </div>
          </div>
        </div>
        {/* <button className="bg-yellow-500" onClick={() => addToCart(id)}>
            Add To Cart
          </button>
          <button className="bg-red-500" onClick={() => removeFromCart(id)}>
            Remove
          </button> */}
      </div>
    </div>
  );
};

export default Product;
<div className="relative">Image</div>;
