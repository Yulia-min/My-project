import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { EmptyState, Gallery } from 'src/components/organism'
import { requestUserSaleInfo } from 'src/redux/editions/actions'
import { getSaleInfo, getSalesResults } from 'src/redux/editions/selector'
import './SaleTab.scss'
import { Loader, Scroll } from 'src/components/atoms'

export const SaleTab = () => {

  const dispatch = useAppDispatch()

  const [offset, setOffset] = useState(0)

  const user_id = localStorage.getItem('id')
  
  const { saleEdition, isLoading } = useAppSelector(getSaleInfo)
  const saleResults = useAppSelector(getSalesResults)

  const loadMoreData = () => {
    if (isLoading) {
      return
    }
    user_id && dispatch(requestUserSaleInfo(offset, setOffset, user_id))
  }

  useEffect(() => {
    loadMoreData()
  }, [])

  return (
    <Scroll hasMore={!!saleResults.length} loadMoreData={loadMoreData} isLoading={isLoading} dataLength={saleResults.length}>
        <div className='editions-display'>
            {
                isLoading && saleResults.length === 0 ? (
                    <Loader isLoader count={6} />    
                    ) : (
                      saleEdition?.count ? ( saleResults.map((edition) => 
                        <div key={edition.moment.id}>
                          <Gallery duration={edition.moment.original_pic.duration} price={edition.number} original_pic={edition.moment.original_pic.attachment} title={edition.moment.title} likes={edition.moment.likes} />
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

