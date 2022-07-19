import React, { useEffect } from 'react'
import { Tabs as MainTabs } from 'antd'
import './Tabs.css'
import { Card } from '../Card'

export const Tabs = () => {

  const { TabPane } = MainTabs
  return (
    <MainTabs defaultActiveKey="1" className='tabs'>
        <TabPane className='tab-pane' tab="My Gallery 0" key="1">
            <Card />
        </TabPane>
        <TabPane tab="Drops 9" key="2">
        Content of Tab Pane 2
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

