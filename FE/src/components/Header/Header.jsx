import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo";

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
