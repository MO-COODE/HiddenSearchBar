import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { useState } from 'react'
import './HiddenSearchBar.css'

const HiddenSearchBar = () => {
    const [showInput, setShowInput] = useState(false)
    const [bgColor, setBgColor] = useState('blue')

    const handleClick = (e) => {
        setBgColor('red')
        if(e.target.className === 'container') {
            setShowInput(false)
            setBgColor('green')
        }
    }

  return (
    <section className='container' 
            style={{backgroundColor: bgColor}} 
            onClick={handleClick}>

        {showInput? (
            <input type="text" placeholder='Search...' />
        ): (
            <div className='search-icon-container'>
            <FaSearch onClick = {() => setShowInput(true)} />
            </div>
        )}
    </section>
  ) 
}

export default HiddenSearchBar
