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
        setLogin: (state) => {
            state.islogged = true
        },
        setLogout: (state) => {
            state.islogged = false
        },
        resetUser: (state) => {
            state.user = {}
        }
    }
})

export const { setUser, setLogin, setLogout,resetUser } = userReducer.actions
export const userSliceReducer= userReducer.reducer