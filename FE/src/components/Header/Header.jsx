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

  const navigate = useNavigate();
  const location = useLocation();

  const renderButton = () => {
    if (location.pathname === "/recipes") {
      return (
        <Button
          label="create recipe"
          onClick={() => navigate("/recipes/create")}
        />
      );
    } else if (location.pathname.match("/activities")) {
      return (
        <Button
          label="create activity"
          onClick={() => navigate("/activities/create")}
        />
      );
    }
    return null;
  };

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
      <div className="button-container">{renderButton()}</div>
    </header>
  );
};

export default Header;
