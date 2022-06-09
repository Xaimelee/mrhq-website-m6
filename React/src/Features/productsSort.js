import { createSlice } from '@reduxjs/toolkit'

export const productsSort = createSlice({
    name: 'productsSort',
    initialState: {
        value: "Brands A-Z"
    },
    reducers: {
        setSort: (state, action) => {
            state.value = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setSort } = productsSort.actions
export default productsSort.reducer