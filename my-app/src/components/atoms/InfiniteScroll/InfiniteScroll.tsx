import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Loader } from '../Loader'
import { ScrollType } from './ScrollType'

export const Scroll = ({loadMoreData, isLoading, children, dataLength, hasMore}: ScrollType) => {

  return (
    <div id="scrollableDiv">
        <InfiniteScroll
            className="scroll"
            dataLength={dataLength}
            next={loadMoreData}
            hasMore={hasMore}
            loader={isLoading && <Loader isInfinityLoader count={1} />}
        >
            {/* <div className='editions-display'> */}
              {children}
            {/* </div> */}
        </InfiniteScroll>
    </div>
  )
}

