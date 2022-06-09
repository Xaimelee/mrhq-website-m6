import { configureStore } from '@reduxjs/toolkit'
import searchCategoryReducer from "./Features/searchCategory"
import searchInputCategoryReducer from "./Features/searchInputCategory"
import searchInputSubCategoryReducer from "./Features/searchInputSubCategory"
import searchInputPriceRangeReducer from "./Features/searchInputPriceRange"
import searchInputLifestageReducer from "./Features/searchInputLifestage"
import searchStateReducer from "./Features/searchState"

export default configureStore({
  reducer: {
      searchState: searchStateReducer,
      searchCategory: searchCategoryReducer,
      searchInputCategory: searchInputCategoryReducer,
      searchInputSubCategory: searchInputSubCategoryReducer,
      searchInputPriceRange: searchInputPriceRangeReducer,
      searchInputLifestage: searchInputLifestageReducer
  }
})