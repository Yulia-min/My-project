import React, { useEffect } from 'react'
import { Button } from 'antd'
import xmint from 'src/public/xmint.png'
import './Card.css'
import { Image } from 'src/components/atoms/Image'

export const Card = () => {
  return (
    <div className='card-wrapper'>
        <Image src={xmint} />
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

