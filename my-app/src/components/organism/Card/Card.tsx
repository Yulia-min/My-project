import React, { useEffect } from 'react'
import { Button } from 'antd'
import './Card.scss'
import { Image } from 'src/components/atoms'
import { CardType } from './CardType'

export const Card = ({ items }: CardType) => {
  return (
    <div className='card-wrapper'>
        <Image src={items.pack_artwork} />
        <div className='card-info'>
            <div className='card-info_name'>{items.title}</div>
            <div className='card-info_price'>${items.price}</div>
        </div>
        <Button className='card-open'>
          Open drop
        </Button>
    </div>
  )
}

