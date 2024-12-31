import "./EditActivity.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { makeRequest } from "../../utils/api/makeRequest.js";
import { API_ENDPOINT } from "../../utils/api/url.enum.js";

import ActivityPage from "../../components/ActivityPage/ActivityPage.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";

const EditActivity = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const activity = state?.activity;

  const [loading, setLoading] = useState(false);
  const [banner, setBanner] = useState({
    isOpen: false,
    level: "info",
    message: "",
  });

  const handleCloseBanner = () => {
    setBanner({ ...banner, isOpen: false });
  };

  const handleEditActivity = async (e, activityData) => {
    e.preventDefault();
    const body = new FormData();

    body.append("name", activityData.name);
    body.append("description", activityData.description);
    body.append("img", activityData.img);
    body.append("howTo", JSON.stringify(activityData.howTo));

    const { data, status } = await makeRequest({
      endpoint: `${API_ENDPOINT.EDIT_ACTIVITY}/${activity._id}`,
      method: "PUT",
      isJSON: false,
      body,
      setLoading,
      setBanner,
    });

    if (status === 200) {
      setBanner({
        isOpen: true,
        level: "success",
        message: `Activity ${data.name} successfully created`,
      });
      setTimeout(() => {
        navigate("/activities");
      }, 1000);
    }
  };

  return (
    <>
      <Banner
        isOpen={banner.isOpen}
        level={banner.level}
        message={banner.message}
        onClose={handleCloseBanner}
      />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <ActivityPage
            title="Edit activity"
            activity={activity}
            btn={{
              labelBtn: "Edit activity",
              handleSubmit: handleEditActivity,
            }}
          />
        </div>
      )}
    </>
  );
};

export default EditActivity;
