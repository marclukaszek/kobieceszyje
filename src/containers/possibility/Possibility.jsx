import React,{useState} from 'react'
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'
import Img1 from '../../img/img1.jpeg'
import Img2 from '../../img/img2.jpeg'
import Img3 from '../../img/img3.jpeg'
import Img4 from '../../img/img4.png'
import CloseIcon from '@material-ui/icons/Close';

const Possibility = () => {
  let data =[
    {
      id: 1,
      imgSrc: Img1,
      title: "Ania. Koneserka czerwonego wina, do tego stopnia, że usta same barwią jej się na bordowo :)"
    },
    {
      id: 2,
      imgSrc: Img2,
      title: "Patrycja. Lubi Frizzante oraz whisky - pije tylko saute. Po zabawie najchętniej odpoczywa leżąc na ziemi."
    },
    {
      id: 3,
      imgSrc: Img4,
      title: "Natalia. Uwielbia Prosseco oraz bąbelkowy zawrót głowy zaraz po nim."
    },
  ]

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) =>{
      setTempImgSrc(imgSrc);
      setModel(true);
  }
  return (
    <>
    <div className={model? "model open" : "model"}>
        <img src={tempimgSrc}/>
        <CloseIcon onClick={()=> setModel(false)}/>
    </div>
    <div className='gpt3__possibility section__padding' id='possibility'>
       {/*} <div className='gpt3__possibility-image'>
            <img src={possibilityImage} alt='possibility' />
  </div>*/}
  
        <div className='gpt3__possibility-content'>
        <h1 className='gradient__text'>Nasi członkowie</h1>
        <h4>Tak naprawdę, to tylko garstka z nich</h4>
          <div className='gpt3__possibility-content-gallery'>
            {data.map((item, index)=>{
              return(
                <div className='pics' key={index} onClick={()=>getImg(item.imgSrc)}>
                  <img src={item.imgSrc} style={{width: '100%'}} />
                  <p>{item.title}</p>

                </div>

              )
            })}
            </div>
        </div>
    </div>
  </>
  )
}

export default Possibility