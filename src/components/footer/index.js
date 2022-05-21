import React from "react";
import HeaderNav from "../header/headerNav";
import Logotype from "../header/logotype";

import "./styles.css";

function Footer() {
  return (
    <div className="footer">
      <div className="headerFooter">
        <HeaderNav LogoColor={"black"} linkColor="black" />
      </div>
      <Logotype type="black" />
    </div>
  );
}

export default Footer;
