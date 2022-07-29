import { ReactNode } from "react"

export type ScrollType = {
    loadMoreData: () => void
    isLoading: boolean
    children: ReactNode
    dataLength: number
    hasMore: boolean
}