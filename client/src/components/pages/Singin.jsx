import React from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Singin() {
  return (
    <>
      <img src="src/assets/vector.png" alt="" className="wave" />
      <div className="container">
        <div className="img">
          <img src="src/assets/box.png" alt="" />
        </div>
        <div className="login-content">
          <form action="">
            <img src="src/assets/user.png" alt="" />
            <h2 className="title">Welcome</h2>
            <div className="input-box one">
              <div className="i">
                <i>
                  <FaUser />
                </i>
              </div>
              <div className="div">
                {/* <h5>Username</h5> */}
                <input type="text" className="input" placeholder="Username" />
              </div>
            </div>
            <div className="input-box pass">
              <div className="i">
                <i>
                  <FaLock />
                </i>
              </div>
              <div className="div">
                {/* <h5>Password</h5> */}
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="input-box pass">
              <div className="i">
                <i>
                  <FaLock />
                </i>
              </div>
              <div className="div">
                {/* <h5>Password</h5> */}
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
              </div>
            </div>
            <Link to="/">Login ?</Link>
            <input type="submit" value="Login" className="btn" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Singin;
