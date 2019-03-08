import React, { Component } from 'react';
import ItemsComponentClass from './ItemsComponentClass';
import productList  from '../../products/products';
import one from '../../assets/img/1.png';
import two from '../../assets/img/2.png';
import three from '../../assets/img/3.png';
import four from '../../assets/img/4.png';
import five from '../../assets/img/5.png';
import six from '../../assets/img/6.png';

const pics = [one, two, three, four, five, six];

const mapper = (picArr,obj) => {
 return picArr.map((x,i) => {
  return {
   itemID: obj[i].itemID,
   ['src'] : x,
   price:obj[i].price
  };
 });
};

export default class ItemsContainer extends Component {
 constructor(props) {
  super(props);
  this.state = { 
   products: mapper(pics, productList)
  };
 }

 render() {
  return (
   <div>
    <ItemsComponentClass products={this.state.products} parent={this.props}/>
   </div>
  );

 }

}

