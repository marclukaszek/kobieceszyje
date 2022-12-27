import React from 'react'
import './footer.css';
import gpt3Logo from '../../assets/logo.svg'
import logo from '../../assets/logo9.png'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
        <div className='gpt3__footer-heading'>
            <h1 className='gradient__text'>Naprawdę chcesz zostać w tyle?</h1>
        </div>
        <div className='gpt3__footer-btn'>
            <p>Dołącz</p>
        </div>
        <div className='gpt3__footer-links'>
            <div className='gpt3__footer-links_logo'>
                <img src={logo} alt='logo'/>
                <p>YamaCode, 2022</p>
                <p>All Rights Reserved</p>
            </div>
            <div className='gpt3__footer-links_div'>
                <h4>Links</h4>
                <p>Patroni</p>
                <p>Social Media</p>
                <p>Lista członków</p>
                <p>Kontakt</p>
            </div>
            <div className='gpt3__footer-links_div'>
                <h4>Klub</h4>
                <p>Regulacje prawne</p>
                <p>Polityka prywatności</p>
                <p>Kontakt</p>
            </div>
            <div className='gpt3__footer-links_div'>
                <h4>Webmastering</h4>
                <p>41-400 Mysłowice</p>
                <p>+4851x490x24</p>
                <p>marlukaszek@gmail.com</p>
            </div>
        </div>
        <div className='gpt3__footer-copy'>
            <p>© 2022 YamaCode. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer