import React from 'react'
import './Checkout.css'

import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout-left'>
                

                
           <div>
    <h2 className='checkout-title'>
        Your Shopping Basket
    </h2>
    {/* basketItem */}
    {/* basketItem */}
    {/* basketItem */}
    {/* basketItem */}
    </div>
     </div>

            <div className='checkout-right'>
             <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
