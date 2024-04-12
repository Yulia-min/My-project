import { CheckedFilterType, InputFilterType, InputTagType, IsInputTagShow } from '../../CatalogType'

export interface IFilterChips{
    checkedFilter: CheckedFilterType
    setCheckedFilter: Function
    inputFilter: InputFilterType
    setInputFilter:Function
    setShowTags: Function
    showTags: IsInputTagShow
    tags: InputTagType
}