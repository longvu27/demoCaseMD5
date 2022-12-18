import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogs = createAsyncThunk(
    'blogs/getBlogs',
    async ()=>{
        const res = await axios.get("http://localhost:3001//posts");
        return res
    }
)

export const addBlog = createAsyncThunk(
    'blogs/addBlog',
    async (data) => {
        const res = await axios.post("http://localhost:3001//posts", data);
        console.log('new blog', res)
        return res
    }
)

export const deleteBlog = createAsyncThunk(
    'blogs/deleteBlog',
    async (data) => {
        const res = await axios.delete("http://localhost:3001//posts/"+ data);
        console.log('delete')
        return res
    }
)