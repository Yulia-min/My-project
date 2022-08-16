import React, { useEffect, useState } from 'react'
import { DropBanerData } from 'src/constants/Api/User/User.d'
import { requestBannerInfo } from 'src/constants/Api/User/User'
import Xmint1 from 'src/public/Xmint1.png'
import './CatalogHeader.scss'

export const CatalogHeader = () => {

  const [banner, setBanner] = useState<DropBanerData>()

  useEffect(() => {
    requestBannerInfo().then((resp) => {
      setBanner(resp.data)
    })
  }, [])

  return (
    <div className='catalog-header_container'>
        <img className='catalog-header_background' src={banner?.marketplace_banner} alt='catalog' />
        <div className='catalog-header_wrapper'>
            <div className='catalog-header_data'>August 31, 2021</div>
            <img className='catalog-header_logo' src={Xmint1} alt='Xmint1' />
            <div className='catalog-header_description'>Created by the world’s best brands and athletes.</div>
            <div className='catalog-header_description'>Created by the and athletes.</div>
        </div>
    </div>
  )
}

