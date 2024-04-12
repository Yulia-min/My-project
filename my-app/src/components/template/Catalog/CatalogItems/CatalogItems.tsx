import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { requestNextMomentsInfo } from 'src/redux/moments/actions'
import { getMomentsInfo, getMomentsResult, getNextMomentsResult } from 'src/redux/moments/selectors'
import { Loader, Scroll } from 'src/components/atoms'
import { Gallery } from 'src/components/organism'
import './CatalogItems.scss'

export const CatalogItems = () => {

  const dispatch = useAppDispatch()
  const { moments, isLoading } = useAppSelector(getMomentsInfo)
  const next = useAppSelector(getNextMomentsResult)
  const results = useAppSelector(getMomentsResult)

  const loadMoreData = () => {
      if (isLoading) {
        return
      }
    dispatch(requestNextMomentsInfo(next))
  }
    
  useEffect(() => {
    loadMoreData()
  }, [])


  return (
    <Scroll loadMoreData={loadMoreData} isLoading={isLoading} hasMore={!!next} dataLength={results.length}>
        <div className='filter-card-display'>
        {
            isLoading && results.length === 0 ? (
              <div className='filter-loader'>
                <Loader isLoader count={6} />
              </div>
            ) : (
                moments?.data.count ? results.map((moment) => 
                    <Gallery key={moment.id} duration={moment.original_pic.duration} original_pic={moment.original_pic.attachment} title={moment.title} price={moment.max_price} likes={moment.likes} />
                ) : (
                    <div className='empty-container'>
                        <div className='empty-container_title'>Your search returned no matches.</div>
                        <div className='empty-container_description'>Please try another search term.</div>
                    </div>
                )                  
            )
        }
        </div>
    </Scroll>
  )
}




