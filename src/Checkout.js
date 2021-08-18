import React from 'react'
import './Checkout.css'

import Subtotal from './Subtotal'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout-left'>
                

                
           <div>
               <h2 className='user'>Welcome to the Wizarding World⚡  {user?.email}</h2>
    <h2 className='checkout-title'>
        Your Shopping Basket
    </h2>
    {basket.map(item =>(
        <CheckoutProduct
        id={item.id}
        title ={item.title}
        price={item.price}
        rating={item.rating}
        image={item.image}
        />
    ))}
    </div>
     </div>
<div className='checkout-right'>
             <Subtotal/>
             </div>
        </div>
    )
}

export default Checkout
