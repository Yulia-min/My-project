import { InputFilterType, InputTagType, IsInputTagShow } from "../../CatalogType"

export interface IYearsRange {
    getInputValueHandler: any
    inputFilter: InputFilterType
    setIsClear: Function
    setTags: Function
    setShowTags: Function
    tags: InputTagType
    showTags: IsInputTagShow
}