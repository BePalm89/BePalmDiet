const BASE_URL_DEV = "http://localhost:3000/api/v1";
//const BASE_URL_PRD : "";

export const makeRequest = async ({
  endpoint,
  method = "GET",
  body,
  isJSON = true,
  setLoading,
  setBanner,
}) => {
  let headers = {};

  if (isJSON) {
    headers["Content-Type"] = "application/json";
  }

  try {
    if (setLoading) setLoading(true);
    const res = await fetch(BASE_URL_DEV + endpoint, {
      method,
      headers,
      body: isJSON ? JSON.stringify(body) : body,
    });

    const data = await res.json();

    if (
      res.status === 401 ||
      res.status === 500 ||
      res.status === 409 ||
      res.status === 403 ||
      res.status === 400 ||
      res.status === 404
    ) {
      if (setBanner) {
        setBanner({ isOpen: true, level: "error", message: data });
      }
    }

    return { data: data, status: res.status };
  } catch (error) {
    console.log(error);
  } finally {
    if (setLoading) setLoading(false);
  }
};
