import React, { useEffect, useState } from 'react'
import { FilterPanel } from '../FilterPanel'
import { Select } from 'antd'
import './CatalogFilter.scss'
import { ReactComponent as Hide } from 'src/public/Hide.svg'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { requestMomentsInfo } from 'src/redux/moments/actions'
import { getMomentsInfo } from 'src/redux/moments/selectors'
import { useLocation, useNavigate } from 'react-router-dom'
import { CatalogItems } from '../CatalogItems'
import { AthleteDataResults, BrandDataResults, PlaceDataResults } from 'src/constants/Api/Moments/Moments.d'
import { requestSportTypeInfo } from 'src/redux/sportTypes/actions'
import { requestAthleteInfo, requestBrandsInfo, requestPlacesInfo } from 'src/constants/Api/Moments/Moments'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import { FilterChips } from '../FilterPanel'
import { CheckedFilterType, FilterType, InputFilterType, InputTagType, IsFilterType, IsInputTagShow } from '../CatalogType'

export const CatalogFilter = () => {

    const dispatch = useAppDispatch()
    const { moments } = useAppSelector(getMomentsInfo)

    const { Option } = Select

    const location = useLocation()
    const navigate = useNavigate()

    const [brands, setBrands] = useState<BrandDataResults[]>()
    const [athletes, setAthletes] = useState<AthleteDataResults[]>()
    const [places, setPlaces] = useState<PlaceDataResults[]>()
    const [showFilter, setShowFilter] = useState(true)
    const [selectValue, setSelectValue] = useState<string>('Newest')

    const [isClear, setIsClear] = useState(false)
    const [isFilterChecked, setIsFilterChecked] = useState<IsFilterType>({athletes__id__in: false, brand__in: false, place__in: false})  
    const [checkedFilter, setCheckedFilter] = useState<CheckedFilterType>({athletes__id__in: [], brand__in: [], place__in: []})
    const [inputFilter, setInputFilter] = useState<InputFilterType>({price: {gte: '', lte: ''}, year: {gte: '', lte: ''}})
    const [showTags, setShowTags] = useState<IsInputTagShow>({price: false, year: false})
    const [tags, setTags] = useState<InputTagType>({price: '', year: ''})

    useEffect(() => {
    dispatch(requestSportTypeInfo())
    requestBrandsInfo().then((resp) => {
        setBrands(resp.data.results)
    })
    requestAthleteInfo().then((resp) => {
        setAthletes(resp.data.results)
    })
    requestPlacesInfo().then((resp) => {
        setPlaces(resp.data.results)
    })
    }, [])

    useEffect(() => {
    if(athletes && brands && places){
        setCheckedFilter({...checkedFilter, [`brand__in`]: brands, [`athletes__id__in`]: athletes, [`place__in`]: places})
    }
    },[athletes , brands, places])

    const showFilterHandler = () => {
        setShowFilter(!showFilter)
    }

    const selectHandler = (values: string) => {
        setSelectValue(values)
        const searchParams = Object.fromEntries(new URLSearchParams(window.location.search))
        searchParams.ordering = values
        const params = new URLSearchParams(searchParams)
        const to = { pathname: location.pathname, search: params.toString() }
        navigate(to, { replace: true })
    }

    useEffect(() => {
        dispatch(requestMomentsInfo(`?${location.search.replace('?', '')}&limit=9&offset=0`))
      }, [location.search])

      const chooseFilterHandler = (checkedValues: CheckedFilterType) =>  {
        const searchParams = Object.fromEntries(new URLSearchParams(window.location.search))
        Object.keys(checkedValues).forEach((url) => {
          const activeParams = checkedValues[url as keyof CheckedFilterType].flat().filter((item) => item.isCheck === true)
          if (activeParams.length === 0) {
            delete searchParams[url]
          } else {
            searchParams[url as keyof CheckedFilterType] = activeParams.map((item:any) => item.id ? item.id : item.name).toString()
          }
        })
        const params = new URLSearchParams(searchParams)
        const to = { pathname: location.pathname, search: params.toString() }
        navigate(to, { replace: true })
        setIsClear(!!Object.keys(searchParams).length)
      }

      useEffect(() => {
        chooseFilterHandler(checkedFilter)
        setIsFilterChecked(Object.keys(checkedFilter).reduce((obj, url) => ({...obj,
            [url]: checkedFilter[url as keyof IsFilterType].some((item:any) => item.isCheck === true)
        }), isFilterChecked))
      }, [checkedFilter])
    
      const selectValueHandler = (data: FilterType, url: string) => (e: CheckboxChangeEvent) => {
        setCheckedFilter({...checkedFilter, [url]: checkedFilter[url as keyof CheckedFilterType].map((item: any) => (data.id ? item.id === data.id : item.name === data.name) ? {...item, isCheck: e.target.checked} : item) })
    }

  return (
    <>
        <div className='catalog-filter'>
            <div className='catalog-filter_info'>
                <div className='filter-name'>
                    {new URLSearchParams(location.search).get("category__in") === null ?
                        "All NFTs" : 
                        new URLSearchParams(location.search).get("category__in")}
                </div>
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
                    <div className='sort-filter_by'>Sort by:</div>
                    <Select showArrow={false} className='filter-select' value={selectValue} onChange={selectHandler}>
                        <Option value="drops__release_datetime">Newest</Option>
                        <Option value="-editions__price">Price: High-Low</Option>
                        <Option value="editions__price">Price: Low-High</Option>
                    </Select>
                </div>
            </div>
        </div>
        {
            !showFilter && <div className='main-tag-wrapper'>
                                <FilterChips 
                                    tags={tags} 
                                    showTags={showTags} 
                                    setShowTags={setShowTags} 
                                    setInputFilter={setInputFilter} 
                                    inputFilter={inputFilter} 
                                    checkedFilter={checkedFilter} 
                                    setCheckedFilter={setCheckedFilter} 
                                />
                            </div>
        }
        <div className='catalog-content'>
            {
                showFilter && <FilterPanel 
                    setTags={setTags}
                    tags={tags}
                    isFilterChecked={isFilterChecked}
                    setCheckedFilter={setCheckedFilter}
                    checkedFilter={checkedFilter}
                    selectValueHandler={selectValueHandler}
                    isClear={isClear}
                    setInputFilter={setInputFilter}
                    inputFilter={inputFilter}
                    setIsClear={setIsClear}
                    setShowTags={setShowTags}
                    showTags={showTags}
                />
            }
            <CatalogItems />
        </div>
    </>
  )
}




