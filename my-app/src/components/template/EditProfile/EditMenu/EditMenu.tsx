import { Tabs } from 'antd'
import React from 'react'
import './EditMenu.scss'
import { EditProfileTab } from '../EditProfileTab'
import { ReactComponent as Password } from 'src/public/Password.svg'
import { ReactComponent as Edit } from 'src/public/Edit.svg'
import { ReactComponent as Security } from 'src/public/Security.svg'
import { ReactComponent as Exit } from 'src/public/Exit.svg'

export const EditMenu = () => {

const { TabPane } = Tabs

  return (
    <div className='tabs-wrapper'>
        <Tabs tabPosition='left' className='edit-tabs'>
            <TabPane tab={
                <span className='tab-pane_item'>
                    <Edit />
                    Edit profile
                </span>
            } 
            key="1"
            className='edit-tab-pane'>
                <EditProfileTab />
            </TabPane>
            <TabPane tab={
                <span className='tab-pane_item'>
                    <Password />
                    Change password
                </span>
            } 
            key="2">
            Content of Tab 2
            </TabPane>
            <TabPane tab={
                <span className='tab-pane_item'>
                    <Security />
                    Security
                </span>
            } 
            key="3">
            Content of Tab 3
            </TabPane>
            <TabPane tab={
                <span className='tab-pane_item'>
                    <Exit />
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

