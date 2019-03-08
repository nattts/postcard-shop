import React, { Component } from 'react';
import './Items.css';

const filterItems = (item,obj) => {
 return obj.filter((x) => x.itemID === item);
};

const isInArray = (item,arr) => {
 return arr.some((x) => x.itemID === item);
};

export default class ItemsComponentClass extends Component {
 constructor(props) {
  super(props);
 }

checkedItems = [];

handleClick = (checkedProducts,parentProps) => {
 checkedProducts.forEach((x) => 
  parentProps.checked.push(x));
}

handleCheckbox = (e, prevstate) => {
 const checkedId = e.target.parentElement.id;
 const filteredItem = filterItems(checkedId,prevstate);
 filteredItem.map((x) => this.checkedItems.push(x));
}
  
render() {
 
 const items = this.props;
 const itemList = items.products.map((it) => {
  return (
   <div className='product' key={it.itemID} id={it.itemID}>
    <img src={it.src} alt='img' />
    <div className='price'>{it.price}</div>
    <input className='checkbox' type="checkbox" name="checkbox" onChange={(e)=>this.handleCheckbox(e,items.products)}/>
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
    <div className='button-div'>
     <button className='add-to-cart-button' onClick={()=>this.handleClick(this.checkedItems,items.parent.properties)}> Add To Cart </button>
    </div>
    <br>
    </br>
    <br>
    </br>
   </div>
   
  </div>
 );
}


}