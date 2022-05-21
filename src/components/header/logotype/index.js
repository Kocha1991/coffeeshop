import React from "react";
import { ReactComponent as Logo } from "../../../assets/img/whiteLogo.svg";
import { ReactComponent as BlackLogo } from "../../../assets/img/blackLogo.svg";
import "./styles.css";

const Logotype = ({ type = "white" }) =>
  type === "white" ? <Logo /> : type === "black" ? <BlackLogo /> : '';

export default Logotype;
