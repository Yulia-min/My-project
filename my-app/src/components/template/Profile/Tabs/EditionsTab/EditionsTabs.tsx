import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { EmptyState, Gallery } from 'src/components/organism'
import { requestUserEditionsInfo } from 'src/redux/editions/actions'
import { getEditionsInfo, getEditionsResults } from 'src/redux/editions/selector'
import './EditionsTabs.scss'
import { Scroll } from 'src/components/atoms/InfiniteScroll'
import { Loader } from 'src/components/atoms'

export const EditionsTabs = () => {

  const dispatch = useAppDispatch()

  const [offset, setOffset] = useState(0)
  const user_id = localStorage.getItem('id')
  
  const { edition, isLoading } = useAppSelector(getEditionsInfo)
  const results = useAppSelector(getEditionsResults)

  const loadMoreData = () => {
    if (isLoading) {
      return
    }
    user_id && dispatch(requestUserEditionsInfo(offset, setOffset, user_id))
  }

  useEffect(() => {
    loadMoreData()
  }, [])

  return (
    <Scroll loadMoreData={loadMoreData} hasMore={!!results.length} isLoading={isLoading} dataLength={results.length}>
      <div className='editions-display'>
        {
            isLoading && results.length === 0 ? (
              <Loader isLoader count={6} />
                ) : (
                edition?.count ? ( results.map((edition) => 
                    <div key={edition.id}>
                      <Gallery duration={edition.moment.original_pic.duration}  price={edition.number} original_pic={edition.moment.original_pic.attachment} title={edition.moment.title} likes={edition.moment.likes} />
                    </div>)
                ) : (
                <EmptyState isButton description='Once you purchase your moments, they will appear here.' />
                )
            )
        }
      </div>
    </Scroll>
           
  )
}

