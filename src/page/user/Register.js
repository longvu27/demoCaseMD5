import {Link} from "react-router-dom";

export default function Register() {
    return (
        <>
            <div className="row">
                <div className="offset-3 col-6">
                    <h1 className={"text-center mt-5"}>Register</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="text" className={"form-control"}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="text" className={"form-control"}/>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="submit" className="ml-3 btn btn-secondary">
                            <Link to={"/"} style={{textDecoration: 'none', color:'white'}}>Login</Link>
                        </button>

                    </form>
                </div>
            </div>
        </>
    )
}