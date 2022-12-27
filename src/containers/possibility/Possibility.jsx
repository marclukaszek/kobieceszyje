import React,{useState} from 'react'
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'
import Img1 from '../../img/img1.jpeg'
import Img2 from '../../img/img2.jpeg'
import Img3 from '../../img/img3.jpeg'
import CloseIcon from '@material-ui/icons/Close';

const Possibility = () => {
  let data =[
    {
      id: 1,
      imgSrc: Img1,
      title: "Ania. Lubi wino, nawet bardzo, czasem można ją zobaczyć otwierającą drzwi z bordowymi ustami po nim :)"
    },
    {
      id: 2,
      imgSrc: Img2,
      title: "Patrycja. Lubi Frizzante oraz whiskey - pije tylko saute - Cola jest ble..."
    },
    {
      id: 3,
      imgSrc: Img3,
      title: "Magda. Magda pije wszystko..."
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
        <h4>Tak naprawdę to tylko garstka z nich</h4>
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