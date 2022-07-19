import React, { useEffect } from 'react'
import { Button } from 'antd'
import xmint from 'src/public/xmint.png'
import './Card.css'
import Countdown from 'react-countdown'

export const Card = () => {
  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <Completionist />
    } else {
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  }
  return (
    <div className='card-wrapper'>
        <div className='image-wrapper'>
          <img className='image' src={xmint} alt='xmint'/>
        </div>
        <div className='card-info'>
            <div className='card-info_name'>Xmint 1</div>
            <div className='card-info_price'>$ 1,299</div>
        </div>
        <Button className='card-open'>
          <Countdown date={Date.now() + 5000} renderer={renderer} />
        </Button>
    </div>
  )
}

