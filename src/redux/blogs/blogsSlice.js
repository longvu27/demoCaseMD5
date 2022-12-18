import {createSlice} from "@reduxjs/toolkit";
import {addBlog, deleteBlog, getBlogs} from "../../service/blogsService";

const initialState = {
    blogs: []
}

const blogsSlice = createSlice({
    name:'blogs',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getBlogs.fulfilled,(state, action) => {
            state.blogs = action.payload.data
        });
        builder.addCase(addBlog.fulfilled,(state, action) => {
            state.blogs.push(action.payload)
        });
        builder.addCase(deleteBlog.fulfilled,(state, action) => {
            console.log(action)
            state.blogs.push(action.payload)
        });
    }
})

export default blogsSlice.reducer