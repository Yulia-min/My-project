import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { EmptyState } from 'src/components/organism'
import { requestUserSaleInfo } from 'src/redux/editions/actions'
import { getSaleInfo, getSalesResults } from 'src/redux/editions/selector'
import { Gallery } from '../../Gallery'
import './SaleTab.scss'
import { Loader, Scroll } from 'src/components/atoms'

export const SaleTab = () => {

  const dispatch = useAppDispatch()

  const [offset, setOffset] = useState(0)
  
  const { saleEdition, isLoading } = useAppSelector(getSaleInfo)
  const saleResults = useAppSelector(getSalesResults)

  console.log(saleResults)

  const loadMoreData = () => {
    if (isLoading) {
      return
    }
    dispatch(requestUserSaleInfo(offset, setOffset))
  }

  useEffect(() => {
    loadMoreData()
  }, [])

  return (
    <Scroll loadMoreData={loadMoreData} isLoading={isLoading} dataLength={saleResults.length}>
        <div className='editions-display'>
            {
                isLoading && saleResults.length === 0 ? (
                    <Loader count={6} />    
                    ) : (
                      saleEdition?.count ? ( saleResults.map((edition) => 
                        <div key={edition.moment.id}>
                          <Gallery  price={edition.number} original_pic={edition.moment.original_pic.attachment} title={edition.moment.title} likes={edition.moment.likes} />
                        </div>)
                    ) : (
                      <EmptyState  description='Once you list your moments for sale, they will appear here.' />
                    )
                )
            }
        </div>
    </Scroll>
  )
}

