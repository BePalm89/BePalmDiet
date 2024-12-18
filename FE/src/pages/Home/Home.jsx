import "./Home.css";
import HeroBox from "../../components/HeroBox/HeroBox.jsx";
import Features from "../../components/Features/Features.jsx";

const Home = () => {
  return (
    <div className="home-container">
      <HeroBox />
      <Features />
    </div>
  );
};

export default Home;
