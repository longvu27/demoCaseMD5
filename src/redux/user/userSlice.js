import {createSlice} from "@reduxjs/toolkit";
import {login} from "../../service/userService";

const initialState = {
    currentUser: JSON.parse(localStorage.getItem('currentUser'))
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.currentUser = action.payload.data
            localStorage.setItem('currentUser', JSON.stringify(action.payload.data))
        })
    }
})
export default userSlice.reducer