import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {login} from "../../service/userService";
import {useDispatch, useSelector} from "react-redux";
import {Field, Formik, Form} from "formik";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const dataUser = useSelector(state => {
        return state.user.currentUser
    })
const handleLogin = async (values) => {
        await dispatch(login(values));
        await navigate('/home')
}
    return (
        <>
            <div className="row">
                <div className="offset-3 col-6">
                    <h1 className={"text-center mt-5"}>Login</h1>
                    <Formik
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        onSubmit={async (values) => {
                            handleLogin(values).then()
                        }}>
                        <Form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <Field name={"username"} type="text" className={"form-control"}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <Field name={"password"} type="text" className={"form-control"}/>
                            </div>
                            <button className="btn btn-primary">Submit</button>
                            <button className="ml-3 btn btn-secondary">Register</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}