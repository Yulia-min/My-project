import { InputFilterType, InputTagType, IsInputTagShow } from "../../CatalogType"

export interface IPriceRange {
    getInputValueHandler: any
    setIsClear: Function
    inputFilter: InputFilterType
    setShowTags: Function
    setTags: Function
    showTags: IsInputTagShow
    tags: InputTagType
}