import "../App.css";
import React from "react";

const Header = () => {
  return (
    <div id="header" className="header">
      <div className="content">
        <h1>HỘI VIÊN</h1>
        <img alt="win" src='/images/win.svg' ></img>
        {/* <image className="header-logo">
          <div className="vector1"></div>
          <div className="vector2"></div>
          <div className="vector3"></div>
          <div className="vector4"></div>
          <div className="vector5"></div>
          <div className="vector6"></div>
          <div className="vector7"></div>
          <div className="vector8"></div>
          <div className="vector9"></div>
        </image> */}
        <h2>Luôn được mua rẻ hơn</h2>
      </div>
    </div>
  );
};

export default Header;
