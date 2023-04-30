import React, { useState,useContext } from "react";
import "../components/loginpage.css"
import { UsersProvider } from "../App";
import { isUserPresent } from "../api/userInfo";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

   const [uname,setUname] = useState('');
   const [pwd,setPwd] = useState('');
   const {users,setUsers} = useContext(UsersProvider);
   const navigate = useNavigate()

   function handleSubmit() {
    if(isUserPresent(uname,pwd)) {
      setUsers(uname)
      navigate("/")
    }
    else {
      console.log("Username or password is wrong");
    }
    
   }


  return (
    <div className="login-wrapper">
      <form className="form-container" action="#">
        <div className="form-group">
          <label htmlFor="exampleInputUsername1">Username address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUsername1"
            aria-describedby="UsernameHelp"
            placeholder="Enter Username"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />
          <small id="UsernameHelp" className="form-text text-muted">
            New account will be created if the details are not found.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit} type="button" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
