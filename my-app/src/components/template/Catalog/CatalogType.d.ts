import { AthleteDataResults, BrandDataResults, PlaceDataResults } from "src/constants/Api/Moments/Moments.d"

  export type CheckedFilterType = {
    athletes__id__in: AthleteDataResults[]
    brand__in: BrandDataResults[]
    place__in: PlaceDataResults[]
  }

  export type FilterType = {
    id: AthleteDataResults | BrandDataResults
    name: PlaceDataResults
  }

  export type IsFilterType = {
    athletes__id__in: boolean
    brand__in: boolean
    place__in: boolean
  }

  export interface InputFilterType {
    price: {
      gte: string,
      lte: string
    }
    year: {
      gte: string
      lte: string
    }
  }

  export type InputTagType = {
    price: string
    year: string
  }

  export type IsInputTagShow = {
    price: boolean
    year: boolean
  }

  export type GteLteType = {
    gte: string
    lte: string
  }