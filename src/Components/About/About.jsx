import React from "react";

export default function About() {
  return (
    <>
      <div className="container-fluid bg-m-color">
        <div className="container">
          <div className="d-flex flex-column items-center justify-center mt-10 h-[97vh] text-white">
            <h2 className="uppercase mb-3 fs-1 fw-bolder mt-10 mt-md-0">about component</h2>
            <div className="d-flex items-center">
              <div className="bg-white h-1 w-20"></div>
              <i className="fa-solid fa-star mx-4"></i>
              <div className="bg-white h-1 w-20"></div>
            </div>
            <div className="d-black d-sm-flex items-center text-center pt-3">
              <p className="mb-6 mx-2">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              <p className="mb-6 mx-2">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
