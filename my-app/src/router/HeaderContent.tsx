import {Outlet} from 'react-router-dom'
import { Header } from 'src/components/atoms'

export const HeaderContent=() =>{
  return (
    <>
        <Header />
        <Outlet/>
    </>
  )
}
