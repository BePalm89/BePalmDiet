import "./Home.css";

import Features from "../../components/Features/Features.jsx";
import HeroBox from "../../components/HeroBox/HeroBox.jsx";

const Home = () => {
  return (
    <div className="home-container">
      <HeroBox />
      <Features />
    </div>
  );
};

export default Home;
