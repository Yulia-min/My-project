import React, { ReactNode, useEffect, useRef, useState } from "react"
import { ReactComponent as Arrow } from 'src/public/Arrow.svg'
import './Collapse.scss'
interface IProps {
  open?: boolean;
  title: string | React.ReactNode;
  children: ReactNode
  isSelect: boolean
}

export const Collapse: React.FC<IProps> = ({
  open,
  children,
  title,
  isSelect
}) => {
  const [isOpen, setIsOpen] = useState(true)
  const [height, setHeight] = useState<number | undefined>(
    open ? undefined : 40
  )

  // console.log(height, 'lll')

  const ref = useRef<HTMLDivElement>(null)

  const showCollapseHandler = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined;
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height)
    })
    resizeObserver.observe(ref.current)
    return () => {
      resizeObserver.disconnect()
    }
  }, [height, isOpen])

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen])

  return (
    <>
      <div className='collapse-transition'>
        <div>
          <div className='collapse-header'>
            <div className="collapse-header_wrapper">
              <div className='collapse-header_text'>{title}</div>
              {
                isSelect && <div className='select-mark' />
              }
            </div>
            <button
              type="button"
              className='collapse-icon-button'
              onClick={showCollapseHandler}
            >
              {
                isOpen ? <Arrow className='rotate-arrow up'/> : <Arrow className='rotate-arrow down'/>
              }
            </button>
          </div>
        </div>
        <div className='collapse-content' style={{ height }}>
          <div ref={ref}>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

