import React from "react";
import { useNavigate } from "react-router-dom";
import Quize from "./Quize";
import Soure from "./Soure";
import TopScores from "./TopScores";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React Quiz App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="py-5">
        {/* Center the Quize component */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-4 col-sm-10 my-5 ">
            <Quize />
          </div>
        </div>

        {/* Score Report */}
        <Soure />
        <TopScores />

      </div>
      <Footer />
    </>
  );
};

export default Home;
