import React from 'react'
import { Feature } from '../../components';
import './whatgpt3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
        <div className='gpt3__whatgpt3-feature'>
            <Feature title="Czym są kobiece szyje?" text=""/><h1 className='gradient__text__boczny'>Możliwości są ponad twoimi wyobrażeniami!</h1>
        </div>
        <div className='gpt3__whatgpt3-heading'>
            <h3 className='gradient__text'>W opini wielu ludzi kobiety powinny zawsze być odpowiedzialne, w oczach tych ludzi nie ma miejsca na damską zabawę. &quot;Kobieta powinna być matką, żoną i kochanką&quot;- w takim myśleniu nie ma miejsca dla nas. To nie prawda, każdej z nas coś się od życia należy! Pokażmy to wszystkim.</h3>
        </div>
        <div className='gpt3__whatgpt3-container'>
            <Feature title="Edukacja" text="Każda z nas powinna wiedzieć, jak dobrze się bawić. Z nami możesz się tego nauczyć. "/>
            <Feature title="Relaks" text="Należy pamiętać, że relaks jest jedną z najważniejszych rzeczy w życiu dorosłego człowieka, my pomożemy Ci go odnaleźć."/>
            <Feature title="Odpowiedzialność" text="Pamiętaj, że każda z nas powinna o siebie dbać. Poddawanie się alkoholowym igraszkom nie zawsze jest proste - pozwól nam o siebie zadbać."/>
        </div>
    </div>
  )
}

export default WhatGPT3