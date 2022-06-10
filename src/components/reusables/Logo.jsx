import React from "react";
import LogoSrc from "/img/logo.png";

const Logo = () => {
  return <img src={LogoSrc} className="logo" alt="logo" style={logoStyle} />;
};

const logoStyle = {
  //   marginLeft: "4rem",
  //   display: "block",
  height: "4rem",
};

export default Logo;
