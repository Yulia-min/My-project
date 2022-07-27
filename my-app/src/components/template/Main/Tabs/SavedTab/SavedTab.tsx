import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { EmptyState } from 'src/components/organism'
import { Gallery } from '../../Gallery'
import './SavedTab.scss'
import { getSavedCardsResults, getSaveСardsInfo } from 'src/redux/savedCards/selectors'
import { requestUserSavedInfo } from 'src/redux/savedCards/actions'
import { Loader, Scroll } from 'src/components/atoms'

export const SavedTab = () => {

  const dispatch = useAppDispatch()

  const [offset, setOffset] = useState(0)
  
  const { savedCards, isLoading } = useAppSelector(getSaveСardsInfo)
  const results = useAppSelector(getSavedCardsResults)

  const loadMoreData = () => {
    if (isLoading) {
      return
    }
    dispatch(requestUserSavedInfo(offset, setOffset))
  }

  useEffect(() => {
    loadMoreData()
  }, [])

  return (
    <Scroll loadMoreData={loadMoreData} isLoading={isLoading} dataLength={results.length}>
      <div className='editions-display'>
        {
          isLoading && results.length === 0 ? (
              <Loader count={6} />
              ) : (
              savedCards?.count ? ( results.map((savedCard) => 
                  <div key={savedCard.id}>
                    <Gallery price={savedCard.max_price} original_pic={savedCard.original_pic.attachment} title={savedCard.title} likes={savedCard.likes} />
                  </div>)
              ) : (
              <EmptyState description='Once you save your moments, they will appear here.' />
              )
          )
        }
      </div>
    </Scroll>
  )
}

