import React from 'react'
import pizzaLeft from '../assest/pizzaLeft.jpg'
import '../style/Contact.css'

export const Contact = () => {
  return (
    <div  className='contact'>
    
    <div className='leftSide'
    style={{backgroundImage: `url(${pizzaLeft})`}}></div>
    <div  className='rightSide'>
        <h1>Contact Us</h1>

        <form id='contact-form' method='POST'>
          <label htmlFor='name'>Name</label>
          <input type='text' placeholder='Enter your name....' name='name'/>
          <label htmlFor='email'>Email</label>
          <input type='email'  placeholder='Enter your email....' name='email' />
          <label htmlFor='message'>Message</label>
          <textarea rows='6' placeholder='Enter message' name='message' required></textarea>
          <button type='submit'>Send Message</button>
           </form>
    </div>
    </div>
  )
}
