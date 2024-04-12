import React, { ChangeEvent, MouseEventHandler, useEffect, useState } from 'react'
import './Video.scss'
import { VideoType } from './VideoType'
import { ReactComponent as Play} from 'src/public/Play.svg'

export const Video = ({src}: VideoType) => {

  const [showIcon, setShowIcon] = useState(true)
  
  const onMouseOver = (e: any) => {
    e.target.play()
    setShowIcon(false)
}

const onMouseOut = (e: any) => {
    e.target.pause()
    setShowIcon(true)
}

  return (
    <div className='video-wrapper'>
        <video src={src} className='video' muted onMouseOver={onMouseOver} onMouseOut={onMouseOut} />
        {
          showIcon && <Play />
        }
    </div>
  )
}

