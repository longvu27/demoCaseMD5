import './App.css';
import Login from "./page/user/Login";
import {Route, Routes} from "react-router-dom";
import Register from "./page/user/Register";
import Home from "./page/home/Home";
import ListBlog from "./page/home/blog/ListBlog";
import AddBlog from "./page/home/blog/AddBlog";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBlogs} from "./service/blogsService";

function App() {
    const dispatch = useDispatch();
    const blogs = useSelector(state => {

        return state.blogs.blogs.data
    })
    const currentUser = useSelector(state => {
        console.log('state.username', state.username)
        return state.username
    })
    useEffect(() => {
        dispatch(getBlogs());
    }, [])
    return (
        <>
            <div className="container-fluid">
                <Routes>
                    <Route path={""} element={<Login/>}/>
                    <Route path={"register"} element={<Register/>}/>
                    {
                        currentUser != undefined ?
                            <Route path={"home"} element={<Home/>}>
                                <Route path={""} element={<ListBlog/>}/>
                                <Route path={"add-blog"} element={<AddBlog/>}/>
                            </Route>
                            :
                            <Route path={""} element={<Login/>}/>
                    }
                </Routes>
            </div>
        </>
    );
}

export default App;
