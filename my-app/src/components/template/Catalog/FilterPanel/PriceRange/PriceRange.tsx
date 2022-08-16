import { Button } from "antd"
import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Input } from "src/components/atoms/Input/Input"
import { Collapse } from "src/components/organism"
import { GteLteType } from "../../CatalogType"
import { IPriceRange } from './PriceRange.d'

export const PriceRange = ({getInputValueHandler, inputFilter, setIsClear, setShowTags, setTags, tags, showTags}: IPriceRange) => {

    const location = useLocation()
    const navigate = useNavigate()

    const [checkPrice, setCheckPrice] = useState({error: ''})

    useEffect(() => {
      if(!checkPrice.error.length){
          const { price } = inputFilter
          const searchParams = Object.fromEntries(new URLSearchParams(window.location.search))
          Object.keys(price).forEach(item => {
            if(price[item as keyof GteLteType]) {
              searchParams[`price__${item}`] = price[item as keyof GteLteType]
            } else if(searchParams[`price__${item}`]){
              delete searchParams[`price__${item}`]
            }})
            const params = new URLSearchParams(searchParams)
            const to = { pathname: location.pathname, search: params.toString() }
            navigate(to, { replace: true })
        }
    }, [checkPrice])

    const choosePriceHandler = () => {
        const {gte, lte} = inputFilter.price
        if( (gte !== '' && +gte < 1) || (lte !== '' && +lte < 1)){
          setCheckPrice({error: 'Please enter at least $ 1'})
        }else if(lte !== '' && +gte > +lte){
          setCheckPrice({error: `Please enter at least $ ${gte}`})
        } else {
          setTags({...tags, price: (inputFilter?.price?.lte && (inputFilter?.price?.gte ? `${inputFilter?.price?.gte}$ - ` : 'Under ') + inputFilter?.price?.lte + '$') || (inputFilter?.price?.gte && ("Over "  + inputFilter?.price?.gte + '$')) } )
          setCheckPrice({error: ''})
          setShowTags({...showTags, price: true})
          setIsClear(true)
        }
      }

    return(
        <Collapse isSelect={!!inputFilter?.price?.gte || !!inputFilter?.price?.lte} open title='Price range'>
            <div className='filter-input_wrapper'>
                <Input filter_input type='number' placeholder='min' value={inputFilter?.price?.gte} onChange={getInputValueHandler('price', 'gte')} className='filter-input price' />
                <Input filter_input type='number' placeholder='max' value={inputFilter?.price?.lte} onChange={getInputValueHandler('price', 'lte')} className='filter-input price' />
                <Button className='filter-input_button' disabled={!inputFilter?.price?.gte && !inputFilter?.price?.lte} onClick={choosePriceHandler}>Go</Button>
            </div>
            <div className='filter-input_check'>{checkPrice.error}</div>
        </Collapse>
    )
}