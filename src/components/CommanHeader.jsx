import React from "react";
import { Link } from "react-router-dom";

const CommonHeader = ({ 
  title, 
  currentPage, 
  showSearch = false, 
  dropdownLabel = "", 
  dropdownItems = [] 
}) => {
  return (
    <div
      className="jumbotron jumbotron-fluid page-header position-relative overlay-bottom"
      style={{ marginBottom: "90px" }}
    >
      <div className="container text-center py-5">
        <h1 className="text-white display-1">{title}</h1>

        <div className="d-inline-flex text-white mb-5">
          <p className="m-0 text-uppercase">
            <Link className="text-white" to="/">
              Home
            </Link>
          </p>
          <i className="fa fa-angle-double-right pt-1 px-3"></i>
          <p className="m-0 text-uppercase">{currentPage}</p>
        </div>

        {showSearch && (
          <div
            className="mx-auto mb-5"
            style={{ width: "100%", maxWidth: "600px" }}
          >
            <div className="input-group">
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-light bg-white text-body px-4 dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {dropdownLabel}
                </button>
                <div className="dropdown-menu">
                  {dropdownItems.map((item, index) => (
                    <a key={index} className="dropdown-item" href="#">
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <input
                type="text"
                className="form-control border-light"
                style={{ padding: "30px 25px" }}
                placeholder="Keyword"
              />

              <div className="input-group-append">
                <button className="btn btn-secondary px-4 px-lg-5">
                  Search
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonHeader;
