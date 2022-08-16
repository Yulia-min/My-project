import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Tag } from 'src/components/atoms/Tag'
import { CheckedFilterType, InputFilterType} from '../../CatalogType'
import { IFilterChips } from './FilterChipsType.d'

export const FilterChips = ({checkedFilter, setCheckedFilter, inputFilter, setInputFilter, setShowTags, showTags, tags}: IFilterChips) => {

  const location = useLocation()
  const navigate = useNavigate()

  const closeHandler = (data: any) => () => {
      setCheckedFilter(Object.keys(checkedFilter).reduce((obj, url) => ({...obj,
        [url]: checkedFilter[url as keyof CheckedFilterType].map((item:any) => (data.id ? data.id === item.id : data.name === item.name )? ({...item, isCheck: false}): item)
      }), checkedFilter))
          
      const searchParams = Object.fromEntries(new URLSearchParams(window.location.search))
      if(data === 'price'){
        delete searchParams.price__gte
        delete searchParams.price__lte
        setInputFilter({...inputFilter, price: {} as InputFilterType})
        setShowTags({...showTags, price: false})
      }
      if(data === 'year'){
        delete searchParams.year__gte
        delete searchParams.year__lte
        setInputFilter({...inputFilter, year: {} as InputFilterType})
        setShowTags({...showTags, year: false})
      }

      const params = new URLSearchParams(searchParams)
      const to = { pathname: location.pathname, search: params.toString() }
      navigate(to, { replace: true })
      }

  return (
    <>
      {
        Object.values(checkedFilter).flat().filter((item) => item.isCheck).map((item) => (
          <Tag children={ 'name' in item ? item.name : item.full_name} onClick={closeHandler(item)} />
        ))
      }
      {
        showTags.price && 
          (<Tag onClick={closeHandler('price')}>{tags.price}</Tag>)
      }
      {
        showTags.year && 
          (<Tag onClick={closeHandler('year')}>{tags.year}</Tag>)
      }
    </>
  )
}




