import React, { Component } from 'react';
import ItemsComponent from './ItemsComponent';
import productList  from '../../products/products';

import { pics,mapper } from '../../helpers/helpers';

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
    <ItemsComponent products={this.state.products} parent={this.props}/>
   </div>
  );

 }

}

