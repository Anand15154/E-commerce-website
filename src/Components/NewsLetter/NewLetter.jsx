import React from 'react'
import './NewLetter.css'

const NewLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your</h1>
        <p>Suscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Yoyr Email id' />
            <button>Suscribe</button>
        </div>

      
    </div>
  )
}

export default NewLetter
