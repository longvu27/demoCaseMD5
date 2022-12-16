import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogs = createAsyncThunk(
    'blogs',
    async ()=>{
        const res = await axios.get("http://localhost:3000//posts");
        return res
    }
)