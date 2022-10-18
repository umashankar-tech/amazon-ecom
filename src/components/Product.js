import React,{useState} from 'react';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import Currency from 'react-currency-formatter';

const MAX_RATING = 5
const MIN_RATING = 1

const Product = ({id,title,price,description,category,image}) => {
  const [rating] = useState(Math.floor(Math.random()* (MAX_RATING-MIN_RATING+1))+MIN_RATING)
  const [hasPrime] = useState(Math.random()<0.5)
  return (
    <div key={id} className='realtive flex flex-col m-3 bg-white z-30 p-10'>
    <p className='absolute right-6 text-xs italic text-gray-400'>{category}</p>
    <Image src={image} alt="product Image" height={200} width={200} objectFit="contain" />
    <h4 className='my-1' >{title}</h4> 
    <div>
       <Rating     
        size="small"
        name="simple-controlled"
        value={rating}
    />
    </div>
     <p className="text-xs my-2 line-clamp-2">{description}</p>
     <div className='mb-5'>
       <Currency quantity={price} currency="INR"/>
    </div>  
    {hasPrime && (
      <div className='flex items-center space-x-2 mt-5' >
        <img className='w-12' src="https://links.papareact.com/fdw" alt=""/>
        <p className="text-xs text-gray-500" >FREE Next-day delivery</p>
      </div>

    )}

    {/*
   

    
   */}
    <button className=" mt-auto button" >Add to cart</button>
   
    </div>
  )
}

export default Product
