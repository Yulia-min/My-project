import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getDropsInfo, getDropsResults } from 'src/redux/drops/selectors'
import { requestUserDropsInfo } from 'src/redux/drops/actions'
import { Card } from '../../Card'
import { EmptyState } from 'src/components/organism'
import { Loader, Scroll } from 'src/components/atoms'

export const DropsTabs = () => {

  const dispatch = useAppDispatch()

  const { drop, isDropsLoading } = useAppSelector(getDropsInfo)
  const results = useAppSelector(getDropsResults)
  const [ offset, setOffset ] = useState(0)

  const loadMoreData = () => {
    if (isDropsLoading) {
      return
    }
    dispatch(requestUserDropsInfo(offset, setOffset))
  }

  useEffect(() => {
    loadMoreData()
  }, [])

  return (
    
    <Scroll loadMoreData={loadMoreData} isLoading={isDropsLoading} dataLength={results.length}>
        <div className='card-display'>
        {
          isDropsLoading && results.length === 0 ? (
            <Loader count={6} />
              ) : (
              drop?.count ? ( results.map((drop) => 
                  <div key={drop.id}>
                    <Card items={drop.drop} />
                  </div> )
              ) : (
              <EmptyState children description='Once you purchase your drops, they will appear here.' />
            )
          )
        }
        </div>
    </Scroll>
  )
}