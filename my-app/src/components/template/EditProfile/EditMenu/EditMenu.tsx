import { Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons'
import './EditMenu.scss'
import { EditProfileTab } from '../EditProfileTab'

export const EditMenu = () => {

const { TabPane } = Tabs

  return (
    <div className='tabs-wrapper'>
        <Tabs tabPosition='left' className='edit-tabs'>
            <TabPane tab={
                <span>
                    <AndroidOutlined />
                    Edit profile
                </span>
            } 
            key="1"
            className='edit-tab-pane'>
                <EditProfileTab />
            </TabPane>
            <TabPane tab={
                <span>
                    <AndroidOutlined />
                    Change password
                </span>
            } 
            key="2">
            Content of Tab 2
            </TabPane>
            <TabPane tab={
                <span>
                    <AndroidOutlined />
                    Security
                </span>
            } 
            key="3">
            Content of Tab 3
            </TabPane>
            <TabPane tab={
                <span>
                    <AndroidOutlined />
                    Sign Out
                </span>
            } 
            key="4">
            Content of Tab 4
            </TabPane>
        </Tabs>
    </div>
  )
}

