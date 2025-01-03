import "./InfoPanel.css";

import PropTypes from "prop-types";

import InfoBlock from "../InfoBlock/InfoBlock";
import Title from "../Title/Title";

const InfoPanel = ({ panelTitle, infos, variant = "primary", style }) => {
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
            style={style}
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
    }),
  ),
  variant: PropTypes.string,
  style: PropTypes.string,
};

export default InfoPanel;
