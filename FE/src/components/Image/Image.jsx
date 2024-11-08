import "./Image.css";

const Image = ({ title, description, urlPhoto }) => {
  return (
    <div
      className="recipe-img-container"
      style={{ backgroundImage: `url(${urlPhoto})` }}
    >
      <h3>{title}</h3>
      <h4>{description}</h4>
    </div>
  );
};

export default Image;
