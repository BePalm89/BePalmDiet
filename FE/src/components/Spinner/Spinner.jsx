import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="load">
      <div className="hamburger">
        <div className="top-bun"></div>
        <div className="pickle"></div>
        <div className="pickle"></div>
        <div className="tomato">
          <div></div>
        </div>
        <div className="tomato">
          <div></div>
        </div>
        <div className="cheese"></div>
        <div className="cheese"></div>
        <div className="beef"></div>
        <div className="bottom-bun"></div>
      </div>
    </div>
  );
};

export default Spinner;
