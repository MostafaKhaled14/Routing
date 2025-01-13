import React from "react";

import image from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <>
      <main>
        <div className="containerfluid bg-m-color h-[100vh] text-center d-flex flex-column justify-content-center align-items-center text-white">
          <div className="flex justify-center items-center mt-36 mt-md-0 ">
            <img className="w-[70%]" src={image} alt="img" />
          </div>
          <div>
            <h2 className="uppercase mb-4 fs-1 fw-bolder whitespace-nowrap mt-3 mt-md-5">start Framework</h2>
            <div className="d-flex items-center justify-center mb-4">
              <div className="bg-white h-1 w-20"></div>
              <i className="fa-solid fa-star mx-4"></i>
              <div className="bg-white h-1 w-20"></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </main>
    </>
  );
}
