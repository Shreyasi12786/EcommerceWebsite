import React, { useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import {Elements,CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from './reducer'
import { useEffect } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'

function Payment() {
    const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [processing, setProcessing] = useState(false)
  const [succeeded, setSucceeded] = useState("")
  const [clientSecret, setclientSecret] = useState(true)

  useEffect(()=>{
      const getClientSecret = async ()=>{
         const response = await axios({
             method:`post`,
             url : `/payment/create?total=${getBasketTotal(basket)*100}`
         })
         setclientSecret(response.data.clientSecret)
      }
      getClientSecret();
  },[basket])

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) =>{
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret,{
        payment_method:
        {
           card: elements.getElement(CardElement)
        }}).then(({paymentIntent})=>{
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replaceState('/orders')
        })


}

const handleChange = event =>{
    setDisabled(event.empty);
    setError(event.error ? event.error.message :"" )

}


  return (
    <div className="payment">
      <div className="payment-container">
          <h1>Checkout (<Link to='/checkout'>{basket?.length} items</Link>)</h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>28, Slv Cplx, Ullal Main Road, Jnanabharathi</p>
            <p> Bangalore, Karnataka</p>

            <p>560056</p>
          </div>
        </div>

        <div className="payment-section">
        <div className="payment-title">
            <h3>Review Items and Delivery</h3>
        </div>
        <div className='payment-items'>
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

        <div className="payment-section">

        <div className="payment-title">
            <h3>Payment-method</h3>
        </div>
        <div className='payment-details'>
           <form onSubmit={handleSubmit}>
               <CardElement onChange={handleChange}/>
               <div className='price-container'>
                   <CurrencyFormat
                   renderText={(value)=>(
                       <>
                       <h3>Order Total : {value}</h3>
                       </>
                   )}
                   decimalScale={2}
                   value={getBasketTotal(basket)}
                   displayType='text'
                   thousandSeparator={true}
                   prefix='Rs'
                   
                   
                   />
                   <button disabled={processing || disabled || succeeded}>

                       <span>{processing ? <p>Processing Payment</p> : 'Confirm Order'}</span>
                   </button>
               </div>
           </form>
           {error && <div>{error}</div>}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
