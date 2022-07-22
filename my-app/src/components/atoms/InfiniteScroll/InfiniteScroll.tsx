import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ScrollType } from './ScrollType'

export const Scroll = ({loadMoreData, isLoading, children, dataLength}: ScrollType) => {

  return (
    <div id="scrollableDiv">
        <InfiniteScroll
            className="scroll"
            dataLength={dataLength}
            next={loadMoreData}
            hasMore={true}
            loader={isLoading && '...'}
        >
            <div className='editions-display'>
            {children}
            </div>
        </InfiniteScroll>
    </div>
  )
}

