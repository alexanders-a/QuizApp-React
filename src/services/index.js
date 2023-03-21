import axios from "axios";

const sendGetRequest = async (method = "get", url = "") => {
  try {
    const response = await axios({
      method: method,
      url: url,
    });
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};

export default sendGetRequest;
