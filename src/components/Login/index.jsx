import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";

const Login = () => {
  let location = useLocation();
  const { pathname } = location;
  console.log(location);
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      {sidebar ? (
        <Sidebar />
      ) : (
        <div className="darker text-light">
          <div className="container height">
            <form action="" className="border p-5 bg-white">
              <h2 className="pb-4 login-heading text-center">Login</h2>
              <div className="text-dark">
                <div className="user-address pb-4">
                  <label htmlFor="emailAddress">Email Address:</label><br />
                  <input
                    type="email"
                    name="emailAddress"
                    id="emailAddress"
                    className="px-3 py-2 border rounded border-secondary"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="user-password pb-4">
                  <label htmlFor="password">Password:</label><br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="px-3 py-2 border rounded border-secondary"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="user-login text-center pt-4">
                    <button type="submit"className="px-4 my-2 rounded-pill loginBtn" onClick={() => setSidebar(true)}>Login</button>
                    {/* <input
                      type="submit"
                      value="Login"
                      
                    /> */}
                    <br />
                    <Link to="/index-demo-4/forgetpassword" className="py-2">
                      Forget Password ?
                    </Link>
                </div>
                <div className="user-add-account mt-5 text-center">
                  <p className="text-dark">
                      Don't have an account ?
                      <Link to={`/index-demo-4/signup`} className="ps-2">
                      Sign Up
                      </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
