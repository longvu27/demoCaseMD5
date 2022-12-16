import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteBlogs, getBlogs} from "../../../service/blogsService";
import {login} from "../../../service/userService";
import {useNavigate} from "react-router-dom";

export default function ListBlog() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const blogs = useSelector(state => {
        console.log(state.blogs.blogs)
        return state.blogs.blogs
    })
    useEffect(() => {
        dispatch(getBlogs());
    }, [])

    return (
        <>
            <div className="row">
                <div className="col-12">
                    {/*{blogs.map((item,index)=> (*/}
                    {/*    <div>*/}
                    {/*        <h6>*/}
                    {/*            {item._id} -*/}
                    {/*            {item.namePost}*/}
                    {/*        </h6>*/}
                    {/*        <button*/}
                    {/*        onClick={()=> {*/}
                    {/*            dispatch(deleteBlogs())*/}
                    {/*        }}*/}
                    {/*        >Delete</button>*/}
                    {/*    </div>*/}
                    {/*))}*/}
                    {blogs.map((item, index) => {
                        return (
                            <div>
                                <p>
                                    {item._id} -
                                    {item.namePost}
                                </p>
                                <button
                                    onClick={() => {
                                        dispatch(deleteBlogs(item._id))
                                        alert('Delete Success');
                                        navigate('')
                                    }}
                                >Delete
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}