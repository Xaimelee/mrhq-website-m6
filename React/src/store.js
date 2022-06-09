import { configureStore } from '@reduxjs/toolkit'
import searchStateReducer from "./Features/searchState"

export default configureStore({
  reducer: {
      searchState: searchStateReducer
  }
})