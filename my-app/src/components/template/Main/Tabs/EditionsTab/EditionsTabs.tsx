import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { EmptyState } from 'src/components/organism'
import { requestUserEditionsInfo } from 'src/redux/editions/actions'
import { getEditionsInfo, getEditionsResults } from 'src/redux/editions/selector'
import { Gallery } from '../../Gallery'
import './EditionsTabs.scss'
import { Scroll } from 'src/components/atoms/InfiniteScroll'
import { Loader } from 'src/components/atoms'

export const EditionsTabs = () => {

  const dispatch = useAppDispatch()

  const [offset, setOffset] = useState(0)
  
  const { edition, isLoading } = useAppSelector(getEditionsInfo)
  const results = useAppSelector(getEditionsResults)

  console.log('results', results)

  const loadMoreData = () => {
    if (isLoading) {
      return
    }
    dispatch(requestUserEditionsInfo(offset, setOffset))
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
                edition?.count ? ( results.map((edition) => 
                    <div key={edition.id}>
                      <Gallery  price={edition.number} original_pic={edition.moment.original_pic.attachment} title={edition.moment.title} likes={edition.moment.likes} />
                    </div>)
                ) : (
                <EmptyState children description='Once you purchase your moments, they will appear here.' />
                )
            )
        }
      </div>
    </Scroll>
           
  )
}

