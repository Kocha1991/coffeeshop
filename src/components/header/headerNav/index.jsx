import React from 'react';
import { Link } from "react-router-dom";
import Logomini from "../../logomini";

import "./index.css";

const HeaderNav = ({
  LogoColor,
  linkColor = "white",
  //user = { name: "Roma", age: 18 },
}) => {
  //const [cofeeCups, setCofeeCups] = useState(0); // const cofeeCups = 0;
  return (
    <div className="container">
      {/* <div>
        Hello {user.name}
        <p>Next year you will have {user.age + 1} years</p>
      </div>
      <div>{cofeeCups > 0 ? `The count of cups of cofee is: ${cofeeCups}` : "You didnt drink cofee today"}</div>
      <button onClick={() => setCofeeCups(cofeeCups + 1)}>
        Drink cup of cofee
      </button>
      <button onClick={() => setCofeeCups(0)}>
        Reset
      </button> */}
      <Logomini type={LogoColor} />
      <nav>
        <ul className="nav-menu">
          <Link to="/" className="link" style={{ color: linkColor }}>
            Coffee house
          </Link>
          <Link
            to="/products"
            className={`link ${linkColor !== "white" ? "linkColored" : ""}`}
          >
            Our coffee
          </Link>
          <Link
            to="/aboutIt/all"
            className={`link ${linkColor !== "white" ? "linkColored" : ""}`}
          >
            Our Coffee
          </Link>
          <Link
            to="/otherProducts"
            className={`link ${linkColor !== "white" ? "linkColored" : ""}`}
          >
            For your pleasure
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNav;
