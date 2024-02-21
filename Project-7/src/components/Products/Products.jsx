import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import StarRating from '../StarRating/StarRating'

const Products = () => {
    const [electronicData, setElectronicData] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((data) => {
            // console.log(data.products)
            setElectronicData(data.products)
        })
        
    }, [])
    
  return (
    <>
     <header className='text-center font-bold text-xl  py-4 border border-gray-700 max-w-7xl mx-auto bg-slate-400 rounded-lg'>
        Products Data fetched from API (Dummy API)
        </header>
    <div className='w-full max-w-7xl mx-auto bg-gray-200 flex flex-wrap justify-center rounded-lg'>   
    {electronicData.map((product) => (
        <div key={product.id} className='border border-gray-700 rounded-lg m-4 overflow-hidden'>
            <img src={product.thumbnail} alt="image"  className='w-56 h-60 '/>
            <div className='px-4 py-2 w-56'>
            <p><b>{product.title}</b></p>
            <p>Company: {product.brand}</p>
            <p>Rating: {product.rating}</p>       
            <p>Price:  ${product.price}</p>
            </div>
        </div>
    ))}
</div>
</>
  )
}

export default Products

