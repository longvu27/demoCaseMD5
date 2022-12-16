import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar";
import Login from "./page/user/Login";
import {Route, Routes} from "react-router-dom";
import Register from "./page/user/Register";
import Home from "./page/home/Home";
import ListBlog from "./page/home/blog/ListBlog";
import AddBlog from "./page/home/blog/AddBlog";

function App() {
  return (
    <>
      <div className="container-fluid">
          <Routes>
              <Route path={""} element={<Login/>}/>
              <Route path={"register"} element={<Register/>}/>
              <Route path={"home"} element={<Home/>}>
                  <Route path={""} element={<ListBlog/>}/>
                  <Route path={"add-blog"} element={<AddBlog/>}/>
              </Route>
          </Routes>
      </div>
    </>
  );
}

export default App;
