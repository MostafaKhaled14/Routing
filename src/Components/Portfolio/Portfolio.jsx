import React, { useRef } from "react";

import image1 from "../../assets/port1.png";
import image2 from "../../assets/port2.png";
import image3 from "../../assets/port3.png";

export default function Portfolio() {
  let layer = useRef();
  let expandImage = useRef();
  function handleLayer(e) {
    layer.current.classList.remove("d-none");
    if (e.target.previousSibling) {
      let src = e.target.previousSibling.getAttribute("src");
      expandImage.current.setAttribute("src", src);
    } else if (e.target.parentElement.previousSibling) {
      let src = e.target.parentElement.previousSibling.getAttribute("src");
      expandImage.current.setAttribute("src", src);
    }
  }
  function hiddenLayer(e) {
    e.target === layer.current && layer.current.classList.add("d-none");
  }
  function hiddenByClose() {
    layer.current.classList.add("d-none");
  }

  return (
    <>
      <div ref={layer} onClick={hiddenLayer} className="d-none layer-color position-absolute top-0 end-0 bottom-0 start-0 z-50">
        <div className="layer position-fixed bg-primar w-[80%] my-fixed-width h-[25%] top-50 end-50 bottom-50 start-50 z-50">
          <h2 onClick={hiddenByClose} className="close position-absolute end-0 me-2 fs-3 fw-medium">
            x
          </h2>
          <img ref={expandImage} className="w-100" src="public/404-error.png" alt="img" />
        </div>
      </div>
      <div className="container-fluid nested">
        <div className="container d-flex flex-column items-center mb-10">
          <h2 className="uppercase my-width mb-3 te-s-color fs-1 fw-bolder mt-32 whitespace-nowrap">portfolio component</h2>
          <div className="d-flex items-center te-s-color">
            <div className="bg-s-color h-1 w-20"></div>
            <i className="fa-solid fa-star mx-4 position-relative"></i>
            <div className="bg-s-color h-1 w-20"></div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 px-4 mt-5">
              <div className="position-relative">
                <img className="w-100 rounded-3" src={image1} alt="img" />
                <div onClick={handleLayer} className="position-absolute text-white top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100">
                  <i className="fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 px-4 mt-5">
              <div className="position-relative">
                <img className="w-100 rounded-3" src={image2} alt="img" />
                <div onClick={handleLayer} className="position-absolute text-white top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100">
                  <i className="fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 px-4 mt-5">
              <div className="position-relative">
                <img className="w-100 rounded-3" src={image3} alt="img" />
                <div onClick={handleLayer} className="position-absolute text-white top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100">
                  <i className="fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 px-4 mt-5">
              <div className="position-relative">
                <img className="w-100 rounded-3" src={image1} alt="img" />
                <div onClick={handleLayer} className="position-absolute text-white top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100">
                  <i className="fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 px-4 mt-5">
              <div className="position-relative">
                <img className="w-100 rounded-3" src={image2} alt="img" />
                <div onClick={handleLayer} className="position-absolute text-white top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100">
                  <i className="fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 px-4 mt-5">
              <div className="position-relative">
                <img className="w-100 rounded-3" src={image3} alt="img" />
                <div onClick={handleLayer} className="position-absolute text-white top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100">
                  <i className="fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
