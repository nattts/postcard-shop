import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
 constructor(props) {
  super(props);
 }


 render(){
  return (

   <div className='contact-wrapper'>
    <div className='contact-text-wrapper'>
     <h1 className='contact-text'> Contact </h1>
    </div>
    
    <form className='contact-form'>
     <div className='input-wrapper'>
      <div className='input-wrapper'>
       <label htmlFor='name'> Name </label>
       <input className='input-form' type='text' id='name' />
      </div>
     </div>

     <div className='input-wrapper'>
      <div className='input-wrapper'>
       <label htmlFor='name'> Email </label>
       <input className='input-form' type='text' id='email' />
      </div>
     </div>

     <div className='input-wrapper'>
      <div className='input-wrapper'>
       <label htmlFor='name'> Subject </label>
       <input className='input-form' type='text' id='subject' />
      </div>
     </div>

     <div className='input-wrapper'>
      <div className='input-wrapper'>
       <label htmlFor='name'> Message </label>
       <textarea className='textarea' name='message' id='message' rows="8" cols="50"/>
      </div>
     </div>

     <div className='input-wrapper'>
      <div className='input-wrapper'>
       <button className='contact-send-message'> Send Message </button>
      </div>
     </div>

     <br>
     </br>
     <br>
     </br>
     <br>
     </br>
     <br>
     </br>
     
    </form>
   </div>
   

  );

 }

}