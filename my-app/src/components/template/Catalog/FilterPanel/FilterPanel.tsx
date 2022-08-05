import React, { useEffect, useState } from 'react'
import { AthleteDataResults, BrandDataResults, PlaceDataResults, SportTypesData } from 'src/constants/Api/Moments/Moments.d'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { requestMomentsInfo } from 'src/redux/moments/actions'
import { requestSportTypeInfo } from 'src/redux/sportTypes/actions'
import { getSportTypesInfo } from 'src/redux/sportTypes/selectors'
import { useLocation, useNavigate } from 'react-router-dom'
import './FilterPanel.scss'
import { Button, Checkbox, Tag } from 'antd'
import { requestAthleteInfo } from 'src/redux/athletes/actions'
import { getAthletesInfo } from 'src/redux/athletes/selectors'
import { Collapse } from 'src/components/organism/Collapse'
import { requestBrandsInfo } from 'src/redux/brands/actions'
import { getBrandsInfo } from 'src/redux/brands/selectors'
import { requestPlacesInfo } from 'src/redux/places/actions'
import { getPlacesInfo } from 'src/redux/places/selectors'
import { Input } from 'src/components/atoms/Input/Input'
import { InputFilter } from 'src/components/organism/InputFilter'

export interface IProps{
  setSelectSportType: Function
}

export const FilterPanel = ({setSelectSportType}: IProps) => {

 const dispatch = useAppDispatch()

 const { sportTypes } = useAppSelector(getSportTypesInfo)
 const { athletes } = useAppSelector(getAthletesInfo)
 const { brands } = useAppSelector(getBrandsInfo)
 const { places } = useAppSelector(getPlacesInfo)

 const [searchBrand, setSearchBrand] = useState<string>('')
 const [searchBrendResults, setSearchBrendResults] = useState<BrandDataResults[]>()
 
 const [selectedAthlete, setSelectedAthlete] = useState<AthleteDataResults[]>()
 const [selectedBrand, setSelectedBrand] = useState<BrandDataResults[]>()
 const [selectedPlace, setSelectedPlace] = useState<any>()

 const [minPrice, setMinPrice] = useState<any>()
 const [maxPrice, setMaxPrice] = useState<any>()
 const [checkPrice, setCheckPrice] = useState<string>()

 const [yearFrom, setYearFrom] = useState<any>()
 const [yearTo, setYearTo] = useState<any>()
 const [checkYear, setCheckYear] = useState<string>()

 const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
  setSearchBrand(e.target.value);
}

 useEffect(() => {
  const results = brands?.results.filter(brand =>
    brand.name.toLowerCase().includes(searchBrand)
  )
  setSearchBrendResults(results);
}, [searchBrand, brands?.results])

 const location = useLocation()
 const navigate = useNavigate()

  useEffect(() => {
    dispatch(requestSportTypeInfo())
    dispatch(requestAthleteInfo())
    dispatch(requestBrandsInfo())
    dispatch(requestPlacesInfo())
  }, [])

  useEffect(() => {
    dispatch(requestMomentsInfo(`?${location.search.replace('?', '')}&limit=9&offset=0`))
  }, [location.search])

  const chooseSportTypeHandler = (e: any) => {
    setSelectSportType(e.currentTarget.textContent)
    const searchParams = Object.fromEntries(new URLSearchParams(window.location.search))
    if (e.currentTarget.textContent === 'All NFTs') {
      delete searchParams.category__in
    } else {
      searchParams.category__in = e.currentTarget.textContent
    }
    const params = new URLSearchParams(searchParams)
    const to = { pathname: location.pathname, search: params.toString() }
    navigate(to, { replace: true })
  }

  const chooseAthleteHandler = (checkedValues: any) => {
    setSelectedAthlete(checkedValues)
    const id = checkedValues.map((checkedValue: any) => checkedValue.id)
    const searchParams = Object.fromEntries(new URLSearchParams(window.location.search))
    if (id?.length === 0) {
      delete searchParams.athletes__id__in
    } else {
      searchParams.athletes__id__in = id
    }
    const params = new URLSearchParams(searchParams)
    const to = { pathname: location.pathname, search: params.toString() }
    navigate(to, { replace: true })
  }

  const chooseBrandsHandler = (checkedValues: any) => {
    setSelectedBrand(checkedValues)
    const id = checkedValues.map((checkedValue: any) => checkedValue.id)
    const searchParams = Object.fromEntries(new URLSearchParams(window.location.search))
    if (id?.length === 0) {
      delete searchParams.brand__in
    } else {
      searchParams.brand__in = id
    }
    const params = new URLSearchParams(searchParams)
    const to = { pathname: location.pathname, search: params.toString() }
    navigate(to, { replace: true })
  }

  const choosePlacesHandler = (checkedValues: any) => {
    console.log(checkedValues)
    setSelectedPlace(checkedValues)
    const searchParams = Object.fromEntries(new URLSearchParams(window.location.search))
    if (checkedValues?.length === 0) {
      delete searchParams.place__in
    } else {
      searchParams.place__in = checkedValues
    }
    const params = new URLSearchParams(searchParams)
    const to = { pathname: location.pathname, search: params.toString() }
    navigate(to, { replace: true })
  }

  const getMinPriceValueHandler = (e: { target: { value: string } }) => {
    setMinPrice(e.target.value)
    setCheckPrice('')
  }

  const getMaxPriceValueHandler = (e: { target: { value: string } }) => {
    setMaxPrice(e.target.value)
    setCheckPrice('')
  }

  const getYearFromValueHandler = (e: { target: { value: string } }) => {
    setYearFrom(e.target.value)
    setCheckYear('')
  }

  const getYearToValueHandler = (e: { target: { value: string } }) => {
    setYearTo(e.target.value)
    setCheckYear('')
  }

  const choosePriceHandler = () => {
    const searchParams = Object.fromEntries(new URLSearchParams(window.location.search))
    if(minPrice > maxPrice){
      setCheckPrice(`Please enter at least $ ${minPrice}`)
    }if(minPrice < 1){
      setCheckPrice('Please enter at least $ 1')
    } else {
      if(minPrice) searchParams.price__gte = minPrice
      if(maxPrice) searchParams.price__lte = maxPrice
    }
    const params = new URLSearchParams(searchParams)
    const to = { pathname: location.pathname, search: params.toString() }
    navigate(to, { replace: true })
  }

  const chooseYearsHandler = () => {
    const searchParams = Object.fromEntries(new URLSearchParams(window.location.search))
    if(yearFrom < yearTo){
      setCheckYear(`Please enter at least $ ${yearFrom}`)
    }if(yearFrom < 1900){
      setCheckYear('Please enter at least 1900')
    } else {
      if(yearFrom) searchParams.year__gte = yearFrom
      if(yearTo) searchParams.year__lte = yearTo
    }
    const params = new URLSearchParams(searchParams)
    const to = { pathname: location.pathname, search: params.toString() }
    navigate(to, { replace: true })
  }

  return (
    <div className='filter-panel-wrapper'>
      <div className='sport-type_wrapper'>
        <div className='sport-type_item' onClick={chooseSportTypeHandler}>All NFTs</div>
        {
          sportTypes?.results.map((sportType) => 
            (
              <div key={sportType.name}>
                <div className='sport-type_item' onClick={chooseSportTypeHandler}>{sportType.name}</div>
              </div>
            )
          )
        }

      </div>
      <div className='filter-main'>Filter</div>
      {
        selectedAthlete?.map((athlete) => (
          <Tag closable  key={athlete.id}>{athlete.full_name}</Tag>
        ))
      }
      {
        selectedBrand?.map((brand) => (
          <Tag closable key={brand.id}>{brand.name}</Tag>
        ))
      }
      <div className='filter-line' />
      <Collapse open title="Athlete">
        <Checkbox.Group onChange={chooseAthleteHandler}>
          <div className='filter-wrapper'> 
            {
              athletes?.results.map((athlete) => (
                <div key={athlete.id}>
                  <Checkbox className='filter-checkbox' value={athlete}>{athlete.full_name}</Checkbox>
                </div>
              ))
            }
          </div>
        </Checkbox.Group>
      </Collapse>
      <div className='filter-line' />
      <Collapse open title="Creator">
        <Checkbox.Group onChange={chooseBrandsHandler}>
           <input className='search-input' placeholder="Search" value={searchBrand} onChange={handleChange} /> 
           <div className='filter-wrapper brand'>   
              {
                searchBrendResults?.map((brand) => (
                  <div key={brand.id}>
                    <Checkbox className='filter-checkbox' value={brand}>{brand.name}</Checkbox>
                  </div>
                ))
              }
            </div>
        </Checkbox.Group>
      </Collapse>
      <div className='filter-line' />
      <InputFilter 
          title='Price range' 
          firstPlaceholder='min' 
          firstValue={minPrice} 
          firstOnChange={getMinPriceValueHandler} 
          secondPlaceholder='max'
          secondValue={maxPrice} 
          secondOnChange={getMaxPriceValueHandler}
          isDisabled={!minPrice && !maxPrice}
          onClick={choosePriceHandler}
          check={checkPrice}
        />
      <div className='filter-line' />
      <Collapse open title="Place">
        <Checkbox.Group onChange={choosePlacesHandler}>
           <div className='filter-wrapper'>   
              {
                places?.results.map((place) => (
                  <div key={place.name}>
                    <Checkbox className='filter-checkbox' value={place.name}>{place.name}</Checkbox>
                  </div>
                ))
              }
            </div>
        </Checkbox.Group>
      </Collapse>
      <div className='filter-line' />
       <InputFilter 
          title='Year range' 
          firstPlaceholder='from' 
          firstValue={yearFrom} 
          firstOnChange={getYearFromValueHandler} 
          secondPlaceholder='to'
          secondValue={yearTo} 
          secondOnChange={getYearToValueHandler}
          isDisabled={!yearFrom && !yearTo}
          onClick={chooseYearsHandler}
          check={checkYear}
        />
    </div>
  )
}




