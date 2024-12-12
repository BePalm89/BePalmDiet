import "./Activities.css";

import { useEffect, useState } from "react";

import ActivityCard from "../../components/ActivityCard/ActivityCard.jsx";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/activities")
      .then((res) => res.json())
      .then((res) => {
        setActivities(res);
      });
  }, []);

  return (
    <div className="activities-container">
      {activities.map((activity) => (
        <ActivityCard key={activity._id} activity={activity}></ActivityCard>
      ))}
    </div>
  );
};

export default Activities;
