import React from "react";

export default function Contact() {
  function handleLabal(e) {
    e.target.value !== "" && e.target.previousElementSibling.classList.add("my-top-0");
    e.target.value === "" && e.target.previousElementSibling.classList.remove("my-top-0");
  }

  return (
    <>
      <div className="container-fluid nested">
        <div className="d-flex flex-column items-center justify-center h-[900px]">
          <h2 className="uppercase mb-3 te-s-color fs-1 fw-bolder">about component</h2>
          <div className="d-flex items-center te-s-color">
            <div className="bg-s-color h-1 w-20"></div>
            <i className="fa-solid fa-star mx-4"></i>
            <div className="bg-s-color h-1 w-20"></div>
          </div>
          <div className="row w-50 w-50 pt-10">
            <label htmlFor="userName">userName :</label>
            <input onChange={handleLabal} className="py-3 border-0 border-bottom rounded-2 " type="text" name="userName" placeholder="userName" id="userName" />
            <label htmlFor="userAge">userAge :</label>
            <input onChange={handleLabal} className="py-3 border-0 border-bottom rounded-2 " type="number" name="userAge" placeholder="userAge" id="userAge" />
            <label htmlFor="userEmail">userEmail :</label>
            <input onChange={handleLabal} className="py-3 border-0 border-bottom rounded-2 " type="email" name="userEmail" placeholder="userEmail" id="userEmail" />
            <label htmlFor="userPassword">userPassword :</label>
            <input onChange={handleLabal} className="py-3 border-0 border-bottom rounded-2 " type="password" name="userPassword" placeholder="userPassword" id="userPassword" />
            <button className="bg-m-color text-white rounded-2 mt-4 w-32 h-10 ms-1 whitespace-nowrap">Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
}
