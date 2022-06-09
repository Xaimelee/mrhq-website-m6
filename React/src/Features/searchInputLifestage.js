import { createSlice } from '@reduxjs/toolkit'

export const searchInputLifestage = createSlice({
    name: 'searchInputLifestage',
    initialState: {
        value: "Lifestage"
    },
    reducers: {
        setInputLifestage: (state, action) => {
            state.value = action.payload
        },
        resetInputLifestage: (state) => {
            state.value = "Lifestage"
        }
    }
})

// Action creators are generated for each case reducer function
export const { setInputLifestage, resetInputLifestage } = searchInputLifestage.actions
export default searchInputLifestage.reducer