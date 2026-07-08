console.clear();
const axios = require("axios");

axios
  .get("https://usmanlive.com/wp-json/api/stories")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
