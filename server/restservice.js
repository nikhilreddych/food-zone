const axios = require("axios");

const getData = (url) => {
  console.log(url);

  const config = {
    headers: {
      "Accept-Encoding": "gzip, deflate, br",
    },
  };

  return axios.get(url, config);
};

export default getData;
