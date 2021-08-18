import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider'



function CheckoutProduct({id,image, price, title, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromeBasket = ()=>{
        dispatch({
          type:'REMOVE_FROM_BASKET',
           id:id,
            
        
        })
    }
    return (
        <div className='checkout-product'>
            <img src={image} className='checkout-img'/>
            <div className='checkout-info'>
            <p className='checkout-product-title'>{title}</p>
            <p className='checkout-price'>
                <small>₹</small> 
                <strong>{price}</strong>
                </p>
                <div className='checkout-rating'>
                    {Array(rating).fill().map((_,i)=>(
                        <p>⭐</p>
                    ))}
                    
                </div>
                <button onClick={removeFromeBasket}>Remove from Basket</button>
            </div>
           

        </div>
    )
}

export default CheckoutProduct
