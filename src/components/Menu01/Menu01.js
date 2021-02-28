import React from 'react'
import './styles.scss'

export default function Menu01(){
  const button = document.querySelector('.menu')
  button.addEventListener('click', () => console.log('clicked'))
  return (
    <div className='Menu01'>
        <div className="menu" >
          <span className='middle' />
        </div>
    </div>
  )
}

