import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBlogs} from "../../../service/blogsService";
import {login} from "../../../service/userService";

export default function ListBlog() {
    const dispatch = useDispatch();
    const blogs = useSelector(state => {
        console.log(state.blogs.blogs)
        return state.blogs.blogs
    })
    useEffect(() => {
        dispatch(getBlogs());
    }, [1])

    return (
        <>
            <div className="row">
                <div className="col-12">
                    {blogs.map((item,index)=> (
                        <h1>{item.namePost}</h1>
                    ))}
                </div>
            </div>
        </>
    )
}