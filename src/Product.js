import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'


function Product({title,image,price,rating}) {

    const [{basket}, dispatch] = useStateValue();

    const addtoBasket =()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                title: title,
                price: price,
                rating:rating,
                image:image,
            }
        })

    }
    return (
        <div className='product'>
            <div className='product-info'>
                <p>{title}
                    <p className='product-price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                    </p>
                </p>
                <div className='product-rating'>
                    {Array(rating).fill().map((_,i)=>(
                        <p>⭐</p>
                    ))}
                    
                </div>
            </div>
            <img src={image}></img>
            <button onClick={addtoBasket}>Add to Cart</button>
        </div>
    )
}

export default Product 
