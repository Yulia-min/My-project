import React, { useEffect } from 'react'
import { Button } from 'antd'
import xmint from 'src/public/xmint.png'
import './Card.css'

export const Card = () => {
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
          Open drop
        </Button>
    </div>
  )
}

