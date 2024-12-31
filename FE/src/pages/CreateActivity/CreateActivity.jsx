import "./CreateActivity.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { makeRequest } from "../../utils/api/makeRequest.js";
import { API_ENDPOINT } from "../../utils/api/url.enum.js";

import ActivityPage from "../../components/ActivityPage/ActivityPage.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";

const CreateActivity = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [banner, setBanner] = useState({
    isOpen: false,
    level: "info",
    message: "",
  });

  const handleCreateActivity = async (e, activityData) => {
    e.preventDefault();
    const body = new FormData();

    body.append("name", activityData.name);
    body.append("description", activityData.description);
    body.append("img", activityData.img);
    body.append("howTo", JSON.stringify(activityData.howTo));

    const { data, status } = await makeRequest({
      endpoint: API_ENDPOINT.CREATE_ACTIVITY,
      method: "POST",
      isJSON: false,
      body,
      setLoading,
      setBanner,
    });

    if (status === 201) {
      setBanner({
        isOpen: true,
        level: "success",
        message: `Activity ${data.name} successfully created`,
      });
      navigate("/activities");
    }
  };

  const handleCloseBanner = () => {
    setBanner({ ...banner, isOpen: false });
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
            title="Create activity"
            btn={{
              labelBtn: "Create activity",
              handleSubmit: handleCreateActivity,
            }}
          />
        </div>
      )}
    </>
  );
};

export default CreateActivity;
