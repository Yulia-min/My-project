import React, { useState } from 'react'
import { AthleteDataResults, BrandDataResults, PlaceDataResults } from 'src/constants/Api/Moments/Moments.d'
import { useAppSelector } from 'src/redux/hooks'
import { getSportTypesInfo } from 'src/redux/sportTypes/selectors'
import { useLocation, useNavigate } from 'react-router-dom'
import './FilterPanel.scss'
import { Checkbox } from 'antd'
import { CheckedFilterType, InputFilterType } from '../CatalogType'
import { IFilterPanel } from './FilterPanel.d'
import { PriceRange, YearsRange, ChecboxFilter, FilterChips } from '.'

export const FilterPanel = ({ isFilterChecked, checkedFilter, setCheckedFilter, selectValueHandler, isClear, setIsClear, inputFilter, setInputFilter, setShowTags, showTags, setTags, tags}: IFilterPanel) => {

 const { sportTypes } = useAppSelector(getSportTypesInfo)

 const [selectSportType, setSelectSportType] = useState<string>("All NFTs")

 const location = useLocation()
 const navigate = useNavigate()

  const chooseSportTypeHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.textContent && setSelectSportType(e.currentTarget.textContent)
    const searchParams = Object.fromEntries(new URLSearchParams(window.location.search))
    if (e.currentTarget.textContent === 'All NFTs') {
      delete searchParams.category__in
    } else {
      e.currentTarget.textContent && (searchParams.category__in = e.currentTarget.textContent)
    }
    const params = new URLSearchParams(searchParams)
    const to = { pathname: location.pathname, search: params.toString() }
    navigate(to, { replace: true })
  }

  const getInputValueHandler = (param: string, url: string) => (e: { target: { value: string } }) => {
    setInputFilter({...inputFilter, [param]: {...inputFilter[param as keyof InputFilterType], [url] : e.target.value}})
  }

  const clearAllHandler = () => {
    if(selectSportType !== 'All NFTs'){
      navigate({pathname: location.pathname, search: `category__in=${selectSportType}`}, { replace: true })
    } else {
      navigate({pathname: location.pathname}, { replace: true })
    }
    setCheckedFilter(Object.keys(checkedFilter).reduce((obj, url) => ({...obj,
      [url]: checkedFilter[url as keyof CheckedFilterType].map((item) => ({...item, isCheck: false}))
   }), checkedFilter))
    setInputFilter({} as InputFilterType)
    setShowTags({...showTags, price: false, year: false})
    setIsClear(false)
  }
  return (
    <div className='filter-panel-wrapper'>
      <div className='sport-type_wrapper'>
        <div tabIndex={1} className='sport-type_item' onClick={chooseSportTypeHandler}>All NFTs</div>
        {
          sportTypes?.results.map((sportType, index) => 
            (
              <div tabIndex={index} key={sportType.name} className='sport-type_item' onClick={chooseSportTypeHandler}>{sportType.name}</div>
            )
          )
        }
      </div>
      <div className='filter-main-wrapper'>
        <div className='filter-main'>Filter</div>
        {
          isClear && <div className='filter-clear' onClick={clearAllHandler}>Clear all</div>
        }
      </div>
      <div className='tag-wrapper'>
        <FilterChips tags={tags} setShowTags={setShowTags} showTags={showTags} setInputFilter={setInputFilter} inputFilter={inputFilter} checkedFilter={checkedFilter} setCheckedFilter={setCheckedFilter} />
      </div>
      <div className='filter-line' />
      <ChecboxFilter title="Athlete" isSelect={isFilterChecked['athletes__id__in']} className='athlete'>
        {
          checkedFilter['athletes__id__in']?.map((athlete: AthleteDataResults) => (
            <div key={athlete.id}>
              <Checkbox checked={athlete.isCheck} onChange={selectValueHandler(athlete, 'athletes__id__in')} className='filter-checkbox' value={athlete}>{athlete.full_name}</Checkbox>
            </div>
          ))
        }
      </ChecboxFilter>
      <div className='filter-line' />
      <ChecboxFilter title="Creator" isSelect={isFilterChecked['brand__in']} className='brand'>
        {
          checkedFilter['brand__in'] && checkedFilter['brand__in'].map((brand: BrandDataResults) => (
            <div key={brand.id}>
              <Checkbox checked={brand.isCheck} onChange={selectValueHandler(brand, 'brand__in')} className='filter-checkbox' value={brand}>{brand.name}</Checkbox>
            </div>
          ))
        }
      </ChecboxFilter>
      <div className='filter-line' />
      <PriceRange 
        showTags={showTags}
        tags={tags}
        setTags={setTags} 
        setShowTags={setShowTags} 
        inputFilter={inputFilter} 
        setIsClear={setIsClear} 
        getInputValueHandler={getInputValueHandler} 
      />
      <div className='filter-line' />
      <ChecboxFilter title="Place" isSelect={isFilterChecked['place__in']} className='place'>
        {
          checkedFilter['place__in']?.map((place: PlaceDataResults) => (
            <div key={place.name}>
              <Checkbox checked={place.isCheck} onChange={selectValueHandler(place, 'place__in')} className='filter-checkbox' value={place}>{place.name}</Checkbox>
            </div>
          ))
        }
      </ChecboxFilter>
      <div className='filter-line' />
      <YearsRange 
        showTags={showTags}
        tags={tags}
        setShowTags={setShowTags}
        setTags={setTags}
        inputFilter={inputFilter} 
        setIsClear={setIsClear} 
        getInputValueHandler={getInputValueHandler} 
      />
    </div>
  )
}




