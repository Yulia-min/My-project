import React from 'react';
import 'antd/dist/antd.min.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import first from 'src/public/first.png'
import second from 'src/public/second.png'
import third from 'src/public/third.png'
import { IMAGES } from 'src/constants/ImageSlider';
import './ImageSlider.scss';
import { SETTING } from 'src/constants/setting';

export const ImageSlider = () => {
  return (
    <Slider {...SETTING} className='slider'>
        {IMAGES.map(image => (
            <div className='image-wrapper' key={image.id}> 
                <img alt='xmint' src={image.image} className='image' /> 
                <div className='title-text'>Collect and sell iconic board sports NFTs.</div>
                <div className='description-text'>Don't miss  the next drop.</div>
                <img src={first} alt='first-icon' className='first-icon' />
                <img src={second} alt='second-icon' className='second-icon' />
                <img src={third} alt='third-icon' className='third-icon' />
            </div>
        ))}
    </Slider>
  )
}

