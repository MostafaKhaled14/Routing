import React from "react";

import image from "../../assets/error-404.png"

export default function Error() {
  return (
    <>
      <div className="d-flex justify-center items-center h-[100vh]">
        <img className="w-50" src={image} alt="Error Image" />
      </div>
    </>
  );
}
