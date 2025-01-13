import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container-fluid bg-s-color text-white px-10">
        <div className="row text-center ">
          <div className="col-md-4 pt-24 ">
            <h2 className="text-2xl fw-medium capitalize pt-3">LOCATION</h2>
            <p className="m-3 mt-1">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 pt-24 ">
            <h2 className="text-2xl fw-medium capitalize pt-3">AROUND THE WEB</h2>
            <div className="mt-3">
              <i className="p-[0.625rem] btn btn-outline-light fa-brands fa-facebook mx-1 icon w-[2.375rem] h-[2.375rem] rounded-full border-1"></i>
              <i className="p-[0.625rem] btn btn-outline-light fa-brands fa-twitter mx-1 icon w-[2.375rem] h-[2.375rem] rounded-full border-1"></i>
              <i className="p-[0.625rem] btn btn-outline-light fa-brands fa-linkedin-in mx-1 icon w-[2.375rem] h-[2.375rem] rounded-full border-1"></i>
              <i className="p-[0.625rem] btn btn-outline-light fa-solid fa-globe mx-1 icon w-[2.375rem] h-[2.375rem] rounded-full border-1"></i>
            </div>
          </div>
          <div className="col-md-4 py-24 ">
            <h2 className="text-2xl fw-medium capitalize pt-3">ABOUT FREELANCER</h2>
            <p className="mt-1">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
      <div className="bg-th-color text-center">
        <p className="text-white py-4">Copyright © by Mostafa 2025</p>
      </div>
    </footer>
  );
}
