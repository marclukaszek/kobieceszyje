import React from 'react'
import './brand.css';
import {myslowice, biedronka, zabka, shot} from './imports.js'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={myslowice} alt="myslowice"/>
      </div>
      <div>
        <img src={biedronka} alt="biedronka"/>
      </div>
      <div>
        <img src={zabka} alt="zabka"/>
      </div>
      <div>
        <img src={shot} alt="shot"/>
      </div>
    </div>
  )
}

export default Brand