import React from 'react';
import './Items.css';


const ItemsComponent = props => {
 const items = props.products;
 const itemList = items.map((it)=>{
  return (
 
   <div className='product' key={it.itemID}>
    <img src={it.src} alt='img' />
  
    <div className='price'>{it.price}</div>
    <input className='checkbox' type="checkbox" id="xxx" name="xxx" />
   </div>
 
  );
 });


 return (

  <div className='items-wrapper'>
   <div className='items-text'> 
    <h1> Featured Products </h1>
   </div>
   <div className='items-container'>
    <div>{itemList}</div>
   </div>
  </div>
   

 );

};

export default ItemsComponent;