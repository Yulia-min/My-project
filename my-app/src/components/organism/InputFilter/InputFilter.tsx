import React, { useEffect, useState } from 'react'
import './InputFilter.scss'
import { Button } from 'antd'
import { Collapse } from 'src/components/organism/Collapse' 
import { Input } from 'src/components/atoms/Input/Input'

export type InputFilterType = {
    title: string
    firstPlaceholder: string
    firstValue: string
    firstOnChange: React.ChangeEventHandler<HTMLInputElement>
    secondPlaceholder: string
    secondValue: string
    secondOnChange: React.ChangeEventHandler<HTMLInputElement>
    isDisabled: boolean
    onClick: () => void
    check: string | undefined
}

export const InputFilter = ({title, firstPlaceholder, firstValue, firstOnChange, secondPlaceholder, secondValue, secondOnChange, isDisabled, onClick, check}: InputFilterType) => {

  return (
    <Collapse open title={title}>
        <div className='filter-input_wrapper'>
            <Input filter_input type='number' placeholder={firstPlaceholder} value={firstValue} onChange={firstOnChange} className='filter-input' />
            <Input filter_input type='number' placeholder={secondPlaceholder} value={secondValue} onChange={secondOnChange} className='filter-input' />
            <Button className='filter-input_button' disabled={isDisabled} onClick={onClick}>Go</Button>
        </div>
        <div className='filter-input_check'>{check}</div>
    </Collapse>
  )
}




