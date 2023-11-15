import { createSlice } from "@reduxjs/toolkit";

const PropertySlice= createSlice({
    name: 'Property',
    initialState: { property: {} },
    reducers: {
        setProperty: (state, action) => {
            state.property = action.payload
        }
    }
})
export const PropertySliceReducer = PropertySlice.reducer
export const { setProperty } = PropertySlice.actions