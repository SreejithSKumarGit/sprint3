import React from "react";
import {Link} from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {

  const{isAuth}=React.useContext(AuthContext);
  return <div>
    <Link to="/">Home</Link>
    <Link to="/" > {isAuth?"Logout":"Login"}</Link>
  </div>;
};

export default Navbar;
