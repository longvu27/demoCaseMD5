import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogs = createAsyncThunk(
    'blogs',
    async ()=>{
        const res = await axios.get("http://localhost:3001//posts");
        return res
    }
)

export const addBlogs = createAsyncThunk(
    'blogs',
    async (data) => {
        const res = await axios.post("http://localhost:3001//posts", data);
        console.log('new blog', res)
        return res
    }
)

export const deleteBlogs = createAsyncThunk(
    'blogs',
    async (data) => {
        const res = await axios.delete("http://localhost:3001//posts/"+ data);
        console.log('delete')
        return res
    }
)