import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.min.css'
import './Header.scss';
import logo from 'src/public/logo.png'
import noFoto from 'src/public/noFoto.png'
import wallet from 'src/public/wallet.png'
import notif from 'src/public/notif.png'
import cn from 'classnames'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as Arrow } from 'src/public/Arrow.svg'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { requestUserInfo } from 'src/redux/users/actions'
import { getUserInfo } from 'src/redux/users/selectors'
import { requestSportTypeInfo } from 'src/redux/sportTypes/actions'
import { getSportTypesInfo } from 'src/redux/sportTypes/selectors'

export const Header = () => {

  const user_id = localStorage.getItem('id')
  const dispatch = useAppDispatch()

  useEffect(() => {
    user_id && dispatch(requestUserInfo(user_id))
    dispatch(requestSportTypeInfo())
  }, [])

  const navigate = useNavigate()

  const [showDropdown, setShowDropdown] = useState(false)

  const { user } = useAppSelector(getUserInfo)
  const { sportTypes } = useAppSelector(getSportTypesInfo)

  const sportTypeSelectHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(e.currentTarget.textContent === 'All NFTs'){
      navigate({pathname: 'market-place/'}, { replace: true })
    } else {
      navigate({pathname: 'market-place/', search: `category__in=${e.currentTarget.textContent}`}, { replace: true })
    }
  }

  const showDropdownHandler = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <>
      <div className='main-header'>
        <img alt='logo' className='main-logo' src={logo} />
        <div className='main-icons'>
          <span tabIndex={1} className='main-select' onClick={showDropdownHandler} >Marketplace
            {
              showDropdown ? <Arrow className='rotate-main-arrow up'/> : <Arrow className='rotate-main-arrow down'/>
            }
          </span>
          {
            showDropdown && (
              <div className='main-select-container'>
                <div className='sport-type_item' onClick={sportTypeSelectHandler}>All NFTs</div>
                {
                  sportTypes?.results.map((sportType) => 
                    (
                        <div key={sportType.name} className='sport-type_item' onClick={sportTypeSelectHandler}>{sportType.name}</div>
                    )
                  )
                }
              </div>
            )
          }
          <img alt='notif' className='notif' src={notif} />
          <img alt='wallet' className='wallet' src={wallet} />
          <Link to='/profile'>
            <img alt='main-profile' src={user?.logo ? user?.logo : noFoto} className={cn('default-image', 'main-profile')} />
          </Link>
        </div>
      </div>
      <div className='line'/>
    </>
  )
}

