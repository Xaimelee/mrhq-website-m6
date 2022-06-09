import { createSlice } from '@reduxjs/toolkit'

export const searchInputSubCategory = createSlice({
    name: 'searchInputSubCategory',
    initialState: {
        value: "Sub Category"
    },
    reducers: {
        setInputSubCategory: (state, action) => {
            state.value = action.payload
        },
        resetInputSubCategory: (state) => {
            state.value = "Sub Category"
        }
    }
})

// Action creators are generated for each case reducer function
export const { setInputSubCategory, resetInputSubCategory } = searchInputSubCategory.actions
export default searchInputSubCategory.reducer