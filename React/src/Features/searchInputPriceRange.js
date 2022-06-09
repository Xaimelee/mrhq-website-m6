import { createSlice } from '@reduxjs/toolkit'

export const searchInputPriceRange = createSlice({
    name: 'searchInputPriceRange',
    initialState: {
        value: [50, 9999]
    },
    reducers: {
        setInputPriceRange: (state, action) => {
            state.value = action.payload
        },
        resetInputPriceRange: (state) => {
            state.value = [50, 9999]
        }
    }
})

// Action creators are generated for each case reducer function
export const { setInputPriceRange, resetInputPriceRange } = searchInputPriceRange.actions
export default searchInputPriceRange.reducer