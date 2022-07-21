import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import InfiniteScroll from 'react-infinite-scroll-component'
import { EmptyState } from 'src/components/organism'
import { requestUserEditionsInfo } from 'src/redux/editions/actions'
import { getEditionsInfo } from 'src/redux/editions/selector'
import { Gallery } from '../../Gallery'
import './EditionsTabs.scss'

export const DOWNLOAD_SIZE = 10
export const EditionsTabs = () => {

  const dispatch = useAppDispatch()

  const [pageCounter, setPageCounter] = useState(1)
  
  const { edition, isLoading } = useAppSelector(getEditionsInfo)

//   console.log(edition)
//   console.log(isLoading)

  const loadMoreData = () => {
    if (isLoading) {
      return
    }
    // dispatch(requestUserEditionsInfo(params))
    setPageCounter(pageCounter + 10)
  }

  useEffect(() => {
    loadMoreData()
  }, [])

  return (
    <div id="scrollableDiv">
        <InfiniteScroll
            className="scroll"
            dataLength={26}
            next={loadMoreData}
            hasMore={true}
            loader={<div className="loading">Loading...</div>}
            scrollableTarget="scrollableDiv"
        >
            <div className='editions-display'>
            {
                edition?.count ? ( edition?.results.map((edition) => 
                <Gallery image={''} title={edition.moment.title} price={edition.number} likes={edition.moment.likes} />)
                ) : (
                <EmptyState children description='Once you list your moments for sale, they will appear here.' />
                )
            }
            </div>
        </InfiniteScroll>
    </div>
  )
}

