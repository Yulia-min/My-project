import { Button } from "antd"
import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Input } from "src/components/atoms/Input/Input"
import { Collapse } from "src/components/organism"
import { GteLteType } from "../../CatalogType"
import { IYearsRange } from './YearRange.d'

export const YearsRange = ({getInputValueHandler, inputFilter, setIsClear, setTags, setShowTags, tags, showTags}: IYearsRange) => {

    const location = useLocation()
    const navigate = useNavigate()

    const [checkYear, setCheckYear] = useState({error: ''})

    useEffect(() => {
        if(!checkYear.error.length){
            const { year } = inputFilter
            const searchParams = Object.fromEntries(new URLSearchParams(window.location.search))
            Object.keys(year).forEach(item => {
            if(year[item as keyof GteLteType]) {
                searchParams[`year__${item}`] = year[item as keyof GteLteType]
            } else if(searchParams[`year__${item}`]){
                delete searchParams[`year__${item}`]
            }})
            const params = new URLSearchParams(searchParams)
            const to = { pathname: location.pathname, search: params.toString() }
            navigate(to, { replace: true })
        }
    }, [checkYear])

    const chooseYearsHandler = () => {   
        const {gte, lte} = inputFilter.year
        if((gte !== '' && +gte < 1900) || (lte !== '' && +lte < 1900) ){
            setCheckYear({error: 'Please enter at least 1900'})
          } else if(lte !== '' && +lte < +gte){
          setCheckYear({error: `Please enter at least ${gte}`})
        } else {
            setTags({...tags, year: (inputFilter?.year?.lte && (inputFilter?.year?.gte ? `${inputFilter?.year?.gte} - ` : 'To ') + inputFilter?.year?.lte) || (inputFilter?.year?.gte && ("From "  + inputFilter?.year?.gte)) } )
            setCheckYear({error: ''})
            setShowTags({...showTags, year: true})
            setIsClear(true)
        }      
      }
    return(
        <Collapse isSelect={!!inputFilter?.year?.gte || !!inputFilter?.year?.lte} open title='Year range'>
            <div className='filter-input_wrapper'>
                <Input filter_input type='number' placeholder='from' value={inputFilter?.year?.gte}  onChange={getInputValueHandler('year', 'gte')} className='filter-input' />
                <Input filter_input type='number' placeholder='to' value={inputFilter?.year?.lte} onChange={getInputValueHandler('year', 'lte')} className='filter-input' />
                <Button className='filter-input_button' disabled={!inputFilter?.year?.gte && !inputFilter?.year?.lte} onClick={chooseYearsHandler}>Go</Button>
            </div>
            <div className='filter-input_check'>{checkYear.error}</div>
      </Collapse>
    )
}