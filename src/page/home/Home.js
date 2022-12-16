import Navbar from "../../component/Navbar";
import {Outlet} from "react-router-dom";

export default function Home() {
    return (
        <>
        <div className="row">
            <div className="col-12">
                <Navbar/>
            </div>
        </div>
            <div className="row">
                <div className="col-12">
                    <h1>Nội dung</h1>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}