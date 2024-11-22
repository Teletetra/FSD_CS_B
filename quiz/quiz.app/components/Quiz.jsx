import React from 'react'
import Header from './Header'
import Footer from './Footer'
import "./App.css"
import qbank from "./Data.js"

const Quiz1 = () => {
  return (
    <div>
    <Header/>
    <div id='Quiz1'>
        <div>
            Question{qbank.id}:{}<br/>
            <input type="radio" name="option" />{qbank.opt1}<br/>
            <input type="radio" name="option" />{qbank.opt2}<br/>
            <input type="radio" name="option" />{qbank.opt3}<br/>
            <input type="radio" name="option" />{qbank.opt4}<br/>
            <button>Previous</button>
            <button>Next</button>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Quiz1