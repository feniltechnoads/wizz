import React from "react";
import { useLocation } from "react-router-dom";
import { HeaderLogo } from "../../utils/allImgs";
import { RiDashboardFill } from "react-icons/ri"


const Sidebar = () => {
  const loction = useLocation();
  const { pathname } = loction;
  console.log(pathname);

  return (
    <>
      <div className="darker" style={{ width: "231px", height: "100vh" }}>
        <div className="d-flex justify-content-center">
          <img
            src={HeaderLogo}
            alt="Logo"
            className="img-fluid mt-5"
            style={{ width: "112px" }}
          />
        </div>
        <div
          className="d-flex justify-content-center align-items-center dashboard"
          style={{ height: "76vh" }}
        >
          <nav class="nav flex-column">
            <a class="nav-link active side-bar" aria-current="page" href="#">
              <div className="mb-0 d-flex align-items-center">
                {/* <span> */}
                  <RiDashboardFill className="text-dark dash-icon" />
                {/* </span> */}
                <span className="px-3">Dashboard</span>
              </div>
            </a>
            <a
              class={`nav-link side-bar ${pathname === "/Node" && "active"}`}
              href="#"
            >
              My Node
            </a>
            <a class="nav-link side-bar" href="#">
              Investments
            </a>
            <a class="nav-link side-bar" href="#">
              Referral
            </a>
            <a class="nav-link side-bar" href="#">
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
