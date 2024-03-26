import React, { useState } from 'react';
import './Gallery.css';
// import CloseIcon from '@mui/icons-material/Close';
// import { Link } from 'react-router-dom';
// import { getImageListItemBarUtilityClass } from '@mui/material';
import { CloseOutlined} from "@ant-design/icons";
import Nav from '../../components/Nav/Nav';


const Gallery =() =>
{
    let data =[
        {
            id:1,
            imgSrc:"https://5.imimg.com/data5/MM/XN/MY-2440773/birthday-celebration.jpg",
        },
        {
            id:2,
            imgSrc:"https://confetti.html.themeforest.createit.pl/assets/images/demo-content/gallery-10.jpg",
        },
        {
            id:3,
            imgSrc:"https://confetti.html.themeforest.createit.pl/assets/images/demo-content/gallery-11.jpg",
        },
        {
            id:4,
            imgSrc:"https://confetti.html.themeforest.createit.pl/assets/images/demo-content/gallery-02.jpg",
        },
        {
            id:5,
            imgSrc:"https://confetti.html.themeforest.createit.pl/assets/images/demo-content/gallery-03.jpg",
        },
        {
            id:6,
            imgSrc:"https://confetti.html.themeforest.createit.pl/assets/images/demo-content/gallery-04.jpg",
        },
        {
            id:7,
            imgSrc:"https://confetti.html.themeforest.createit.pl/assets/images/demo-content/gallery-04.jpg",
        },
        {
            id:8,
            imgSrc:"https://confetti.html.themeforest.createit.pl/assets/images/demo-content/gallery-07.jpg",
        },
        {
            id:9,
            imgSrc:"https://confetti.html.themeforest.createit.pl/assets/images/demo-content/gallery-06.jpg     ",
        },
        {
            id:10,
            imgSrc:"https://confetti.html.themeforest.createit.pl/assets/images/demo-content/gallery-01.jpg",
        }

    ]
    const [model,setModel]=useState(false);
    const [tempimgSrc,setTempImgSrc]= useState('');

    const getImg= (imgSrc)=>
    {
       setTempImgSrc(imgSrc);
       setModel(true);
    }
    return(
        <>
        <Nav/>
        <div>
        <h1 style={{fontSize:"40px",color: "#ff69b4",fontFamily:"serif",alignItems:"center",display:"flex",justifyContent:"center",paddingTop:"40px"}}>Gallery</h1>
        <div className={model? "model open":"model"}>
             <img src={tempimgSrc}/>
              <CloseOutlined onClick={()=>setModel(false)}></CloseOutlined>
        </div>
        <div className="gallery">
            {data.map((item, index)=>{
                return(
                    <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src ={item.imgSrc} style={{width: '100%',marginTop:'54px'}}/>
                  </div>
                   )
            })}
                </div>
                </div>
        </>
    )
}
export default Gallery;