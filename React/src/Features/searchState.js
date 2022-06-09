import { createSlice } from '@reduxjs/toolkit'

export const searchState = createSlice({
    name: 'searchState',
    initialState: {
        value: false
    },
    reducers: {
        setState: state => {
            state.value = !state.value
        }
    }
})

// Action creators are generated for each case reducer function
export const { setState } = searchState.actions
export default searchState.reducer