import config from "../config/env.prod";
import { RESPONSE_SUCCESS, RESPONSE_FAILURE } from "./constants";

const get = async (url, options = {}) => {
  try {
    let response = await fetch(`${config.apiUrl}${url}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    return { data, status: RESPONSE_SUCCESS };
  } catch (err) {
    return { err, status: RESPONSE_FAILURE };
  }
};
const post = async (url, params = {}) => {
  try {
    const response = await fetch(`${config.apiUrl}${url}`, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      const message = `An error has occured: ${response.status}​​`;
      throw new Error(message);
    }
    return { status: RESPONSE_SUCCESS };
  } catch (err) {
    return { err, status: RESPONSE_FAILURE };
  }
};
const httpService = {
  get,
  post,
};

export default httpService;
