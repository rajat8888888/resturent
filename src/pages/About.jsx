import React from 'react'
import MultipalImages from '../assest/multiplePizzas.jpeg'
import '../style/About.css'
export const About = () => {
  return (
    <div className='about'>
    <div className='aboutTop' 
    style={{backgroundImage: `url(${MultipalImages})`}}>
      
    </div>
    <div className='aboutBottom'>
        <h1>About Us:</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quis unde, modi excepturi ex perferendis, ut accusamus similique 
        quasi dolores recusandae error voluptas blanditiis  quos 
        explicabo cumque nostrum reprehenderit quisquam corrupti
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quis unde, modi excepturi ex perferendis, ut accusamus similique 
        quasi dolores recusandae error voluptas blanditiis  quos 
        explicabo cumque nostrum reprehenderit quisquam corrupti? 
        </p>
    </div>
    </div>
  )
}
