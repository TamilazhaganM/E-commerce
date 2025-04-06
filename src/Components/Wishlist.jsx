import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromWishlist,decrementCard,incrementCart } from '../Slices/slice'; // make sure this path is correct

function Wishlist() {
  const wishlistItems = useSelector((state) => state.Liked.wishlist);
  const dispatch = useDispatch();
  const [select,setSelect]=useState([])
  const [cardAdded, setCardAdded] = useState({});

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };

  // Make sure checkcard function exists or pass it as props
  function checkcard(id,image,rate) {
    setCardAdded((prev) => {
      const isAdded=prev[id]
      if(isAdded){
        dispatch(decrementCard())
      }else{
        dispatch(incrementCart())
        const product={id,image,rate};
        setSelect((prev)=>[...prev,product])
        dispatch(addToCart(product))
      }
      return{
        ...prev,
        [id]: !prev[id],
      }
      })

      
  }
  return (
    <div>
      <h1 className='my-24 text-center text-2xl font-semibold'>WishList</h1>
      <div className='flex flex-wrap justify-center w-full gap-6'>
        {wishlistItems.map((item, index) => (
          <div key={index} className='relative w-64 flex flex-col'>
            <button
              className='absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs'
              onClick={() => handleRemove(item.id)}
            >
              ✕
            </button>
            <img className='w-full h-3/4 rounded-xl' src={item.image} alt={`Wishlist item ${index + 1}`} />
            <p className='text-center text-gray-600'>RS.{item.rate}</p>
            <div className="flex justify-center mt-2">
    <button className="group flex justify-center items-center" onClick={() => checkcard(item.id, item.image, item.rate)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={cardAdded[item.id]?"black":"none"}
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="size-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
    </button>
</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
