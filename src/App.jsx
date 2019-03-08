import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Logo from './components/Logo/Logo';
import Aside from './components/Aside/Aside';
import ItemsContainer from './components/Items/ItemsContainer';
import Cart from './components/Cart/Cart';
import './App.css';

export default class App extends Component {
 constructor() {
  super();
  this.state = {checked:[]};
 }
 render() {
  return (
   <BrowserRouter>
    <div className='App'>
     <Logo/>
     
     
     <Aside/>

     {/*<Route exact path='/' component={ItemsComponentClass} />*/}
     {/* <ItemsContainer/>*/}
     {/* <div className='wr'>*/}
     <Route exact path='/' render={() => <ItemsContainer properties={this.state} />}/>
     
     {/*<div className='clear'></div>*/}
     <Route path='/cart' render={() => <Cart properties={this.state}/> }/>
    </div>
    {/*</div>*/}
   </BrowserRouter>
  );
 }
}














