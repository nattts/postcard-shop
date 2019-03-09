import React from 'react';
import './Cart.css';

const total = obj => {
 return obj.reduce((sum,b) => {
  sum = sum + b.price;
  return sum;

 },0);
};

const Cart = props => {


 const items = props.properties.checked;
 console.log(items);
 
 const totalPrice = total(items);

 const itemList = items.map((it) => {
  return (
 
   <div className='cart-product' key={it.itemID}>
    <ul className='cart-list'>
     <li className='cart-list-items'><img src={it.src} alt='img' /></li>
  
     <div className='cart-price'>{'£' + Number(it.price).toFixed(2)}</div>
    </ul>
   </div>
 
  );

 });

 
 
 return (

  <div className='cart'>
   {itemList}
   <div className='total-checkout-continue-shopping'>
    <input className='total-box' type="text" name="total-box" readOnly value={'£'+ Number(totalPrice).toFixed(2)}/>
    <button className='checkoutt-button'> Checkout </button>
    <button className='continue-shopping-button'> Continue Shopping </button>
   </div>
   <br>
   </br>
   <br>
   </br>
  </div>
   

 );

};
export default Cart;