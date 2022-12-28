import React from 'react'
import './features.css';
import { Feature } from '../../components';

const featuresData = [
    {
        title: 'Zabawa',
        text: 'Zabawa stanowi dużą część naszego życia. Zabawa z alkoholem może być tylko przyjemniejsza. Alkohol pozwala nam się rozluźnić oraz otworzyć.',
    },
    {
        title: 'Sumienność',
        text: 'Większość z naszych członkiń lubi pić często, najlepiej byłoby codziennie, ale minimum to przynajmniej raz w tygodniu...',
    },
    {
        title: 'Integracja',
        text: 'Każda z nas wie, że picie do lustra nie jest niczym przyjemnym. Najlepiej spotkać się w gronie innych klubowiczów lub znajomych. My robimy to praktycznie, co weekend. Wspólne picie, wydłuża życie!',
    },
    {
        title: 'Samorozwój',
        text: '"Trening czyni mistrza" - to sformułowanie słyszymy od lat. Wiadomo, że jeśli będziemy pić często, będziemy też mogły wypić znacznie więcej, lepiej się bawić i nie martwić kacem.',
    },

]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
        <div className='gpt3__features-heading'>
            <h1 className='gradient__text'>Zasady są jedną z najważniejszych rzeczy z ludzkim życiu, tak też jest w naszym klubie.</h1>
            <p>Dołącz do nas już dzisiaj!</p>
        </div>
        <div className='gpt3__features-container'>
            {featuresData.map((item, index) => (
                <Feature title ={item.title} text={item.text} key={item.title+index}/>
            ))}
        </div>
    </div>
  )
}

export default Features