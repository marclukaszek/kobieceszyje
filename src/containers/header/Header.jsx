import React from 'react'
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import wine_glass from '../../assets/wine_glass.png'
import homeImg from '../../assets/home.jpeg'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
            <h1 className='gradient__text'>Dołącz do najprężniej rozwijającego się damskiego klubu!</h1>
            <p>Zrzeszamy kobiety, które wiedzą, że czasami po prostu trzeba się napić - każda z nas na to zasługuje. Dołącz do nas!</p>
            <p>PS. Wcale nie musisz być kobietą, mężczyzni również są mile widziani...</p>
            <div className='gpt3__header-content__input'>
                <input type='email' placeholder='Twój adres email'></input>
                <button type='button'>Zapisz się</button>
            </div>
            <div className='gpt3__header-content__people'>
                <img src={people} alt="people"/>
                <p>1600 osób już do nas dolączyło</p>
            </div>
        </div>
        <div className='gpt3__header-image'>
                <img src={homeImg} alt="ai"/>
        </div>
    </div>
  )
}

export default Header