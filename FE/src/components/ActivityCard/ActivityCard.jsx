import "./ActivityCard.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { makeRequest } from "../../utils/api/makeRequest.js";
import { API_ENDPOINT } from "../../utils/api/url.enum.js";

import Link from "../Link/Link.jsx";
import Modal from "../Modal/Modal.jsx";
import Button from "../Button/Button.jsx";
import Banner from "../Banner/Banner.jsx";

const ActivityCard = ({ activity }) => {
  const navigate = useNavigate();

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
  const [loading, setLoading] = useState(false);
  const [banner, setBanner] = useState({
    isOpen: false,
    level: "info",
    message: "",
  });

  const handleDelete = async () => {
    const { status } = await makeRequest({
      endpoint: `${API_ENDPOINT.DELETE_ACTIVITY}/${activity._id}`,
      method: "DELETE",
      setBanner,
      setLoading,
    });

    if (status === 200) {
      setIsModalOpen(false);
      setBanner({
        isOpen: true,
        level: "success",
        message: `Activity ${activity.name} successfully deleted`,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  const handleCloseBanner = () => {
    setBanner({ ...banner, isOpen: false });
  };

  return (
    <>
      <Banner
        isOpen={banner.isOpen}
        message={banner.message}
        level={banner.level}
        onClose={handleCloseBanner}
      />
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
          title={activity.name}
          onClose={() => setIsModalOpen(false)}
        >
          <div className="activity-info-container">
            <p>{activity.description}</p>
            <ul>
              {activity.howTo.map((step, index) => (
                <li key={step}>
                  <span>{`${index + 1}.`}</span> <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="activity-actions-container">
            <Button
              label="Edit activity"
              onClick={() =>
                navigate(`edit/${activity._id}`, { state: { activity } })
              }
            />
            <Button
              label="Delete activity"
              variant="danger"
              onClick={handleDelete}
              isLoading={loading}
            />
          </div>
        </Modal>
      </div>
    </>
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
