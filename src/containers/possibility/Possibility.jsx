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
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
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
          <div className='gpt3__possibility-content-gallery'>
            {data.map((item, index)=>{
              return(
                <div className='pics' key={index} onClick={()=>getImg(item.imgSrc)}>
                  <img src={item.imgSrc} style={{width: '100%'}} />
                </div>

              )
            })}
            </div>
            <h4>Request Early Access to Get Started</h4>
            <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <h4>Request Early Access to Get Started</h4>
        </div>
    </div>
  </>
  )
}

export default Possibility