import { createSlice } from '@reduxjs/toolkit'

export const searchCategory = createSlice({
    name: 'searchCategory',
    initialState: {
        value: 0
    },
    reducers: {
        setCategory: (state, action) => {
            state.value = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setCategory } = searchCategory.actions
export default searchCategory.reducer