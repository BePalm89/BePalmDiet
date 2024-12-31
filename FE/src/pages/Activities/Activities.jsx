import "./Activities.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { makeRequest } from "../../utils/api/makeRequest.js";
import { API_ENDPOINT } from "../../utils/api/url.enum.js";

import ActivityCard from "../../components/ActivityCard/ActivityCard.jsx";
import Button from "../../components/Button/Button.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import Title from "../../components/Title/Title.jsx";

const Activities = () => {
  const navigate = useNavigate();

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getAllActivities() {
      try {
        const { data } = await makeRequest({
          endpoint: API_ENDPOINT.GET_ALL_ACTIVITIES,
          setLoading,
        });
        setActivities(data);
      } catch (error) {
        console.log(error);
      }
    }

    getAllActivities();
  }, []);

  return (
    <>
      <div className="activities-header">
        <Title text="Activities' List" level={1} />
        <Button
          label="create activity"
          onClick={() => navigate("/activities/create")}
        />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="activities-container">
          {activities.map((activity) => (
            <ActivityCard key={activity._id} activity={activity}></ActivityCard>
          ))}
        </div>
      )}
    </>
  );
};

export default Activities;
