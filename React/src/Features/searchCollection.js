import { createSlice } from '@reduxjs/toolkit'

export const searchCollection = createSlice({
    name: 'searchCollection',
    initialState: {
        value: {}
    },
    reducers: {
        setCollection: (state, action) => {
            state.value = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setCollection } = searchCollection.actions
export default searchCollection.reducer