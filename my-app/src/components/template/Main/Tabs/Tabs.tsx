import React, { useEffect, useState } from 'react'
import { Tabs as MainTabs } from 'antd'
import './Tabs.css'
import { Card } from '../Card'
import { EmptyState } from '../../../organism/EmptyState'
import { Gallery } from '../Gallery'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getDropsInfo, getDropsLoading } from 'src/redux/drops/selectors'
import { requestUserDropsInfo } from 'src/redux/drops/actions'
import { requestUserEditionsInfo } from 'src/redux/editions/actions'
import { getEditionsInfo } from 'src/redux/editions/selector'
import InfiniteScroll from 'react-infinite-scroll-component'
import { DropsTabs } from './DropsTabs'
import { EditionsTabs } from './EditionsTabs'

export const Tabs = () => {
  
  const { drop } = useAppSelector(getDropsInfo)
  const { edition } = useAppSelector(getEditionsInfo)


  const { TabPane } = MainTabs

  return (
    <MainTabs defaultActiveKey="1" className='tabs'>
        <TabPane className='tab-pane' tab="My Gallery 0" key="1">
          <EditionsTabs />
        </TabPane>
        <TabPane tab="Drops 9" key="2">
          <DropsTabs/>
        </TabPane>
        <TabPane tab="For Sale" key="3">
        Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Saved" key="4">
        Content of Tab Pane 4
        </TabPane>
    </MainTabs>
  )
}

