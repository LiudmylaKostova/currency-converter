import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="navList">
      <li className="navListItem">
        <NavLink
          exact
          to="/"
          className="navLink"
          activeClassName="navLink--active"
        >
          Home
        </NavLink>
      </li>
      <li className="navListItem">
        <NavLink
          to="/converter"
          className="navLink"
          activeClassName="navLink--active"
        >
          Converter
        </NavLink>
      </li>
      <li className="navListItem">
        <NavLink
          to="/currency"
          className="navLink"
          activeClassName="navLink--active"
        >
          Currency
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
