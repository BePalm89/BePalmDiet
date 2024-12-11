import "./InfoPanel.css";

import PropTypes from "prop-types";

import Title from "../Title/Title";
import InfoBlock from "../InfoBlock/InfoBlock";
const InfoPanel = ({ panelTitle, infos, variant = "primary" }) => {
  return (
    <div className={`panel ${variant}`}>
      <Title
        text={panelTitle}
        level={2}
        style={{ color: "var(--color-surface-a0)" }}
      />
      <div className="infos-container">
        {infos.map((info, index) => (
          <InfoBlock
            key={index}
            title={info.title}
            description={info.description}
          />
        ))}
      </div>
    </div>
  );
};

InfoPanel.propTypes = {
  panelTitle: PropTypes.string.isRequired,
  infos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  variant: PropTypes.string,
};

export default InfoPanel;
