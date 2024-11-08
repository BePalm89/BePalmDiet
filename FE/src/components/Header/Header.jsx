import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

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
      <Button
        label="create recipe"
        onClick={() => navigate("/recipes/create")}
      />
    </header>
  );
};

export default Header;
