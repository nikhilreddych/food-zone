import getData from "./restservice";

const routes = (app) => {
  app.route("/getUserInfo").get((req, res) => {
    const response = getData("https://api.github.com/users/nikhilreddych");
    response
      .then(function (response) {
        // handle success
        res.json(response.data);
      })
      .catch(function (error) {
        // handle error
        res.send(error);
      })
      .finally(function () {
        // always executed
      });
  });
};

export default routes;
