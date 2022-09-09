import "../App.css";
import React from "react";

const Header = () => {
  return (
    <div id="header" className="header">
      <div className="content" style={{padding:30}} >
        <h1>HỘI VIÊN</h1>
        <img alt="winLogo" src='/images/win.svg' ></img>
        <h2>Luôn được mua rẻ hơn</h2>
      </div>
    </div>
  );
};

export default Header;
