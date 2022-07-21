import React, { useEffect, useState } from 'react'
import { Tabs as MainTabs } from 'antd'
import './Tabs.css'
import { Card } from '../Card'
import { DropsTab } from './DropsTab'
import { EmptyState } from '../../../organism/EmptyState'
import { Gallery } from '../Gallery'

export const Tabs = () => {

  const { TabPane } = MainTabs

  return (
    <MainTabs defaultActiveKey="1" className='tabs'>
        <TabPane className='tab-pane' tab="My Gallery 0" key="1">
          <Gallery />
        </TabPane>
        <TabPane tab="Drops 9" key="2">
          {/* <EmptyState children description='Once you list your moments for sale, they will appear here.' /> */}
          <Card />
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

