import React from 'react'
import './blog.css';
import {Article} from '../../components/';
import {blog01, blog02, blog03, blog04, blog05} from './imports.js';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
        <div className='gpt3__blog-heading'>
            <h1 className='gradient__text'>
                Dzieje się naprawdę sporo, piszemy o tym na naszym blogu!
            </h1>
        </div>
        <div className='gpt3__blog-container'>
            <div className='gpt3__blog-container_groupA'>
                <Article imgUrl={blog01} date='Grudzień 30, 2022' title='Planowana impreza sylwestrowa na Lipowej!'/>
            </div>
            <div className='gpt3__blog-container_groupB'>
            <Article imgUrl={blog02} date='Grudzień 12/13, 2022' title='"Igraszki z Diabłem" - nasze członkinie również tam będą!'/>
            <Article imgUrl={blog03} date='Październik 28, 2022' title='Znowu chlejemy u Ani...'/>
            <Article imgUrl={blog04} date='Październik 1, 2022' title='Otwieramy październikowe chlanie u Ani'/>
            <Article imgUrl={blog05} date='Wrzesień 24, 2022' title='Biesiada piwna - niby idziemy popracować...'/>
            </div>
        </div>
    </div>
  )
}

export default Blog 