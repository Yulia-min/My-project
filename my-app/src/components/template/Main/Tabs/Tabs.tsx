import React, { useEffect, useState } from 'react'
import { Tabs as MainTabs } from 'antd'
import './Tabs.css'
import { Card } from '../Card'
// import apiClient from 'src/helper/api'

// type ProfileData = {
//   email: string
//   id: string
//   username: string
// }

export const Tabs = () => {

  const [drops, setDrops] = useState({})
  const [editions, setEditions] = useState({})
  const [saved, setSaved] = useState ({})

  const user_id = localStorage.getItem("user_id")

  // useEffect(() => {
  //   apiClient().get(`users/${user_id}/editions/`).then((res) => { 
  //     console.log(res.data)
  //     setEditions(res.data)
  //     // setUserInfo(res.data)
  // })
  //   apiClient().get(`users/${user_id}/drops/`).then((res) => { 
  //     console.log(res.data)
  //     setDrops(res.data)
  //     // setUserInfo(res.data)
  //   })
  //   apiClient().get(`users/${user_id}/saved/`).then((res) => { 
  //     console.log(res.data)
  //     setSaved(res.data)
  //     // setUserInfo(res.data)
  //   })
  // }, [])

  const { TabPane } = MainTabs
  return (
    <MainTabs defaultActiveKey="1" className='tabs'>
        <TabPane className='tab-pane' tab="My Gallery 0" key="1">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Drops 9" key="2">
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

