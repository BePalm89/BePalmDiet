import "./Activities.css";

import { useEffect, useState } from "react";

import ActivityCard from "../../components/ActivityCard/ActivityCard.jsx";
import { makeRequest } from "../../utils/api/makeRequest.js";
import { API_ENDPOINT } from "../../utils/api/url.enum.js";
import Spinner from "../../components/Spinner/Spinner.jsx";

const Activities = () => {
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
