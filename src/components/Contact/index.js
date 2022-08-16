import './index.scss';
import React from 'react'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

const Contact = () => {
  return (
    <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    strArray={['C','o','n','t','a','c','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nobis nulla eum nesciunt dolores quam? Rem modi ratione vero nesciunt!
                </p>
                <div className="contact-form">
                <form action="">
                    <ul>
                        <li className="half">
                            <input type="text" name='name' placeholder='Enter Name' required/>
                        </li>

                        <li className="half">
                            <input type="email" name='email' placeholder='Enter Email' required/>
                        </li> 

                        <li className="half">
                            <input type="text" name='subject' placeholder='Enter Subject' required/>
                        </li> 

                        <li className="half">
                            <textarea name='message' placeholder='Enter Message' required/>
                        </li> 

                        <li className="half">
                            <input className='flat-button' type='submit' value='Send' />
                        </li> 

                    </ul>
                </form>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
    </>
  )
}

export default Contact