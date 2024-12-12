import "./ActivityCard.css";
import PropTypes from "prop-types";
import Link from "../Link/Link.jsx";
import Modal from "../Modal/Modal.jsx";
import { useState } from "react";

const ActivityCard = ({ activity }) => {
  const colors = [
    "var(--color-primary-a10)",
    "var(--color-primary-a20)",
    "var(--color-primary-a30)",
    "var(--color-accent-a10)",
    "var(--color-accent-a20)",
    "var(--color-accent-a30)",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="activity-card-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${activity.img})`,
      }}
    >
      <h2 className="activity-name" style={{ backgroundColor: randomColor }}>
        {activity.name}
      </h2>
      <p>{activity.description}</p>
      <Link
        label="How to"
        url=""
        style="secondary-link"
        action={() => setIsModalOpen(true)}
      />
      <Modal
        isOpen={isModalOpen}
        data={activity}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

ActivityCard.propTypes = {
  activity: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    howTo: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ActivityCard;
