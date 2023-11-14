import { createSlice } from '@reduxjs/toolkit'
import { apiData } from '../types/apiTypes'

type PropertiesState = {
    array: apiData[]
    purpose:string
}

const propertiesSlice = createSlice({
    name: 'properties',
    initialState:{array:[] ,purpose:''} as PropertiesState,
    reducers: {
        setProperties: (state, action) => {
            state.array = action.payload
        },
        resetProperties: (state) => {
            state.array = []
        },
        setPurpose:(state,action)=>{
            state.purpose=action.payload
        }
    }
})
export const propertiesReducer = propertiesSlice.reducer
export const { setProperties,setPurpose,resetProperties } = propertiesSlice.actions