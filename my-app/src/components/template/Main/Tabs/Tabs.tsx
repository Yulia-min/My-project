import React, { useEffect, useState } from 'react'
import { Tabs as MainTabs } from 'antd'
import './Tabs.css'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getDropsInfo } from 'src/redux/drops/selectors'
import { getEditionsInfo, getSaleInfo } from 'src/redux/editions/selector'
import { DropsTabs } from './DropsTab'
import { EditionsTabs } from './EditionsTab'
import { SavedTab } from './SavedTab'
import { SaleTab } from './SaleTab'
import { getSaveСardsInfo } from 'src/redux/savedCards/selectors'

export const Tabs = () => {
  const { drop } = useAppSelector(getDropsInfo)
  const { edition } = useAppSelector(getEditionsInfo)
  const { savedCards } = useAppSelector(getSaveСardsInfo)
  const { saleEdition } = useAppSelector(getSaleInfo)

  const { TabPane } = MainTabs

  return (
    <MainTabs defaultActiveKey="1" className='tabs'>
        <TabPane className='tab-pane' tab={`Gallery ${edition?.count ? edition?.count : 0}`} key="1">
          <EditionsTabs />
        </TabPane>
        <TabPane tab={`Drops ${drop?.count ? drop?.count : ''}`} key="2">
          <DropsTabs/>
        </TabPane>
        <TabPane  tab={`For sale ${saleEdition?.count ? saleEdition?.count : 0}`} key="3">
          <SaleTab />
        </TabPane>
        <TabPane  tab={`Saved ${savedCards?.count ? savedCards?.count : 0}`} key="4">
          <SavedTab />
        </TabPane>
    </MainTabs>
  )
}

