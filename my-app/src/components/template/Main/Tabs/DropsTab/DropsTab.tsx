import React, { useEffect, useState } from 'react'
import { Tabs as MainTabs } from 'antd'
import './DropsTab.scss'
import { Card } from '../../Card'

export const DropsTab = () => {

  const { TabPane } = MainTabs
  return (
    <TabPane tab="Drops 9" key="2">
        <Card />
    </TabPane>
  )
}

