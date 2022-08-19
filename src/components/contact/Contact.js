import React from 'react'
import './ContactStyles.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="container">
            <div className="form-container">
                <form>
                    <h1><span>Contact</span>Us</h1>
                    <div>
                        <label htmlFor="">name</label>
                        <input type="text" placeholder='enter your name'/>
                    </div>
                    <div>
                        <label htmlFor="">name</label>
                        <input type="text" placeholder='enter your email'/>
                    </div>     
                    <div>
                        <label htmlFor="">name</label>
                        <textarea rows='10' placeholder='enter your name'/>
                    </div>                 
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact