import {IsFilterType, CheckedFilterType, InputFilterType, InputTagType, IsInputTagShow} from '../../Catalog/CatalogType.d'

export interface IFilterPanel{
    isFilterChecked: IsFilterType
    setCheckedFilter: Function
    checkedFilter: CheckedFilterType
    selectValueHandler: Function
    isClear: boolean
    setIsClear: Function
    setInputFilter: Function
    inputFilter: InputFilterType
    setShowTags: Function
    showTags: IsInputTagShow
    setTags: Function
    tags: InputTagType
  }
  