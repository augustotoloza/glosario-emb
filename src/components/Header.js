import React from "react";
import Search from "./Search";
import { Link, useRouteMatch } from "react-router-dom";

function Header() {
  let { path } = useRouteMatch();
  let isOnIndex = path === "/";

  return (
      <div className="headerContainer">
        <Link to="/">
          <h1>Glosario de Marketing Digital</h1>
        </Link>
        {isOnIndex ? (
          <div className="searchWrapper">
            <label>Busca tu término</label>
            <Search />
          </div>
        ) : (
          ""
        )}
      </div>
  );
}

export default Header;
