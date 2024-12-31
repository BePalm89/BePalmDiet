import "./Header.css";

import { NavLink, useLocation, useNavigate } from "react-router-dom";

import Logo from "../Logo/Logo";
import Button from "../Button/Button";

const Header = () => {
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Recipes",
      url: "/recipes",
    },
    {
      title: "Activities",
      url: "/activities",
    },
  ];

  return (
    <header>
      <Logo />
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.title}>
              <NavLink to={link.url} activeclassname="active">
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div></div>
    </header>
  );
};

export default Header;
