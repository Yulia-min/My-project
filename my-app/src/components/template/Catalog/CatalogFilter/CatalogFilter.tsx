import React, { useEffect, useState } from 'react'
import { FilterPanel } from '../FilterPanel'
import { Select } from 'antd'
import './CatalogFilter.scss'
import { ReactComponent as Hide } from 'src/public/Hide.svg'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { requestNextMomentsInfo } from 'src/redux/moments/actions'
import { getMomentsInfo, getMomentsResult, getNextMomentsResult } from 'src/redux/moments/selectors'
import { Loader, Scroll } from 'src/components/atoms'
import { Gallery } from 'src/components/organism'

export const CatalogFilter = () => {

    const dispatch = useAppDispatch()
    const { moments, isLoading } = useAppSelector(getMomentsInfo)
    const next = useAppSelector(getNextMomentsResult)
    const results = useAppSelector(getMomentsResult)

    const { Option } = Select

    const [showFilter, setShowFilter] = useState(true)
    const [selectValue, setSelectValue] = useState<string>('Newest')
    const [selectSportType, setSelectSportType] = useState<string>("All NFTs")


    const showFilterHandler = () => {
        setShowFilter(!showFilter)
    }

    const selectHandler = (values: any) => {
        setSelectValue(values)
    }

    const loadMoreData = () => {
        if (isLoading) {
          return
        }
        dispatch(requestNextMomentsInfo(next))
      }
    
      useEffect(() => {
        loadMoreData()
      }, [])

    console.log(results.map(result => result.original_pic.format === 'mp4'))

  return (
    <>
        <div className='catalog-filter'>
            <div className='catalog-filter_info'>
                <div className='filter-name'>{selectSportType === "All NFTs" ? "All NFTs" : selectSportType}</div>
                <div className='filter-items'>{moments?.data.count ? moments.data.count : 0} items</div>
            </div>
            <div className='catalog-filter_sort'>
                <div className='hide-filter'>
                    <div className='show-hide' onClick={showFilterHandler}>{showFilter ? 'Hide' : 'Show'} 
                        <div>&nbsp;filter</div>
                        <Hide />
                    </div>
                </div>
                <div className='sort-filter'>
                    <div>Sort by:</div>
                    <Select showArrow className='filter-select' value={selectValue} onChange={selectHandler}>
                        <Option value="newest">Newest</Option>
                        <Option value="oldest">Oldest</Option>
                    </Select>
                </div>
            </div>
        </div>
        <div className='catalog-content'>
            {
                showFilter && <FilterPanel setSelectSportType={setSelectSportType} />
            }

            <Scroll loadMoreData={loadMoreData} isLoading={isLoading} hasMore={!!next} dataLength={results.length}>
                <div className='filter-card-display'>
                {
                    isLoading && results.length === 0 ? (
                    <Loader isLoader count={6} />
                    ) : (
                        moments?.data.count ? results.map((moment) => 
                            <div key={moment.id}>
                                <Gallery format={results.map(result => result.original_pic.format === 'mp4')} original_pic={moment.original_pic.attachment} title={moment.title} price={moment.max_price} likes={moment.likes} />
                            </div> 
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
        </div>
    </>
  )
}




