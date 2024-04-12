import React  from 'react'
import { Collapse } from 'src/components/organism'
import { ChecboxFilterType } from './ChecboxFilterType'
import cn from 'classnames'
import './ChecboxFilter.scss'


export const ChecboxFilter = ({ isSelect, title, children, className}: ChecboxFilterType) => {
  return (
      <Collapse open title={title} isSelect={isSelect}>
          <div className={cn('filter-wrapper', className)}> 
            {children}
          </div>
      </Collapse>
  )
}




