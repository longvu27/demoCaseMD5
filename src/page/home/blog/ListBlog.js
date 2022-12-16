import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBlogs} from "../../../service/blogsService";

export default function ListBlog() {
    const dispatch = useDispatch();
    const blogs = useSelector(state => {
        console.log(state.blogs.blogs.data)
        return state.blogs.blogs.data
    })
    useEffect(()=> {
        dispatch(getBlogs());
    },[1])
    return (
        <>
        <div className="row">
            <div className="col-12">
                {blogs.map((item, index)=>(
                    <div>
                        STT: {index +1} - Name: {item.namePost} - Content: {item.contents}
                    </div>

                ))}
            </div>
        </div>
        </>
    )
}