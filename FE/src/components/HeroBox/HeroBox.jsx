import "./HeroBox.css";
import Title from "../Title/Title.jsx";
import Button from "../Button/Button.jsx";
import { useNavigate } from "react-router-dom";

const HeroBox = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-box-container">
      <div className="hero-box-title">
        <h1>
          Nurture <span>Your Relationship</span> with Food
        </h1>
        <Title
          level={2}
          text="Discover a healthier, more mindful approach to eating and living."
        />
        <div>
          <Button
            label="Discover recipes"
            onClick={() => navigate("/recipes")}
          />
        </div>
      </div>
      <div className="hero-box-img">
        <img src="/images/heroBoxImg.jpg" alt="herobox" />
      </div>
    </div>
  );
};

export default HeroBox;
