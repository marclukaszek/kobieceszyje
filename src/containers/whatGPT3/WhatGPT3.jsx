import React from 'react'
import { Feature } from '../../components';
import './whatgpt3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
        <div className='gpt3__whatgpt3-feature'>
            <Feature title="Czym są kobiece szyje?" text="W opini wielu ludzi kobiety powinny zawsze być odpowiedzialne, w oczach tych ludzi nie ma miejsca na damską zabawe. &quot;Kobieta powinna być matką, żona i kochanką&quot;- W takim myśleniu nie ma miejsca dla nas. To nie prawda, każdej z nas coś się od życia nalezy! Pokażmy to wszystkim."/>
        </div>
        <div className='gpt3__whatgpt3-heading'>
            <h1 className='gradient__text'>Możliwości są ponad twoimi wyobrażeniami</h1>
            <p>Poszerz swoją wiedzę</p>
        </div>
        <div className='gpt3__whatgpt3-container'>
            <Feature title="Edukacja" text="Każda z nas powinna wiedzieć jak dobrze się bawić, z nami możesz się tego nauczyć. "/>
            <Feature title="Relaks" text="Należy pamiętać, ze relaks jest jedną z najwazżiejszych rzeczy w życiu dorosłego człowieka, My pomożemy Ci go odnaleźć"/>
            <Feature title="Odpowiedzialność" text="Pamiętaj, ze każda z nas powinna o siebie dbać. Poddawanie się alkoholowym igraszkom nie zawsze jest proste - pozwól nam o siebie zadbać."/>
        </div>
    </div>
  )
}

export default WhatGPT3