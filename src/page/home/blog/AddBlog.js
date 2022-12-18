import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {addBlog} from "../../../service/blogsService";
import {useNavigate} from "react-router-dom";

export default function AddBlog() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <>
            <div className="row">
                <div className="offset-3 col-6">
                    <Formik
                        initialValues={{
                            namePost: '',
                            contents: '',
                            major: '637b1e256cd4bbdb3b6e54a8',
                            company: '637d58505bf491d56a8dab4f'
                        }}
                        onSubmit={(values) => {
                            dispatch(addBlog(values))
                            alert('add success')
                            console.log(values)
                            navigate('/home')
                        }}>
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                <Field className={"ml-3 form-control"} name={'namePost'}></Field>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Content</label>
                                <Field className={"ml-3 form-control"} name={'contents'}></Field>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}