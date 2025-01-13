import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const handleUnremoved = useRef();
  const handleRemoved = useRef();

  document.addEventListener("click", (e) => {
    handleRemoved.current !== undefined && handleRemoved.current.classList.remove("show");
    e.target === handleUnremoved.current && handleRemoved.current.classList.add("show");
  });

  function handleRemovShow(e) {
    e.target.parentElement.parentElement.parentElement.classList.remove("show");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-s-color py-4 fixed-top z-40">
        <div className="container text-uppercase">
          <Link className="navbar-brand !text-3xl text-white fw-bolder ms-3" to="home">
            Start Framework
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div ref={handleRemoved} className="collapse navbar-collapse me-3" id="navbarSupportedContent">
            <ul ref={handleUnremoved} className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li className="nav-item me-3 w-fit">
                <NavLink onClick={handleRemovShow} className="nav-link text-center text-white fw-bold mt-3 mt-md-0 px-2 rounded-3" aria-current="page" to="home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-3 w-fit">
                <NavLink onClick={handleRemovShow} className="nav-link text-center text-white fw-bold mt-3 mt-md-0 px-2 rounded-3 !text-[1rem]" to="about">
                  About
                </NavLink>
              </li>
              <li className="nav-item me-3 w-fit">
                <NavLink onClick={handleRemovShow} className="nav-link text-center text-white fw-bold mt-3 mt-md-0 px-2 rounded-3 !text-[1rem]" to="portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item me-3 w-fit">
                <NavLink onClick={handleRemovShow} className="nav-link text-center text-white fw-bold mt-3 mt-md-0 px-2 rounded-3 !text-[1rem]" to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
