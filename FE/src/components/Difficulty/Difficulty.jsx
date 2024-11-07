import "./Difficulty.css";

const Difficulty = ({ difficulty }) => {
  const difficultyMap = {
    easy: 1,
    medium: 2,
    hard: 3,
  };

  const hatsToDisplay = difficultyMap[difficulty] || 0;

  return (
    <div className="difficulty-container">
      {Array.from({ length: hatsToDisplay }).map((_, index) => (
        <img
          key={index}
          src="/icons/chef-hat.png"
          alt="chef hat"
          id="chef-hat"
        />
      ))}
    </div>
  );
};

export default Difficulty;
