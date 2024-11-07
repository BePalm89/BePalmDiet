import "./Rating.css";

const Rating = ({ rating }) => {
  return (
    <div>
      {Array.from({ length: rating }).map((_, index) => (
        <img key={index} src="/icons/cupcake.png" alt="cupcake" id="cupcake" />
      ))}
    </div>
  );
};

export default Rating;
