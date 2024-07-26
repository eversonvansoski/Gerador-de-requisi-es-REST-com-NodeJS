const axios = require("axios");

module.exports = async (workerData) => {
  const { metodo, url, header, body } = workerData;

  const method = metodo.toLowerCase();
  const headers = JSON.parse(header || "{}");
  const requestBody = body ? JSON.parse(body) : null;

  try {
    const response = await axios({
      method,
      url,
      headers,
      data: requestBody,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
