import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'user',
    initialState: {
        user: {},
        islogged: false
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setLogin: (state, action) => {
            state.islogged = true
        },
        setLogout: (state) => {
            state.islogged = false
        }
    }
})

export const { setUser, setLogin, setLogout } = userReducer.actions
export const userSliceReducer= userReducer.reducer