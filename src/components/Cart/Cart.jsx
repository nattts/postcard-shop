import React from 'react';

const Cart = props => {
 //console.log(props)

 const items = props.properties.checked;
 
 const itemList = items.map((it)=>{
  return (
 
   <div className='product' key={it.itemID}>
    <img src={it.src} alt='img' />
  
    <div className='price'>{it.price}</div>
    
   </div>
 
  );
 });



 return (

  <div className='cart'>
   {itemList}
   <div>
    <input className='total-box' type="text" name="total-box" />
    <button className='checkoutt-button'> Checkout </button>
    <button className='continue-shopping-button'> Continue Shopping </button>
   </div>
  </div>
   

 );

};
export default Cart;