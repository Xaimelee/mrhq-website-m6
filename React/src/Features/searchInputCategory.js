import { createSlice } from '@reduxjs/toolkit'

export const searchInputCategory = createSlice({
    name: 'searchInputCategory',
    initialState: {
        value: "Category"
    },
    reducers: {
        setInputCategory: (state, action) => {
            state.value = action.payload
        },
        resetInputCategory: (state) => {
            state.value = "Category"
        }
    }
})

// Action creators are generated for each case reducer function
export const { setInputCategory, resetInputCategory } = searchInputCategory.actions
export default searchInputCategory.reducer