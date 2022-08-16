import { MouseEventHandler, ReactNode } from "react"

export type TagType = {
    children: ReactNode
    onClick: MouseEventHandler<HTMLDivElement>
}