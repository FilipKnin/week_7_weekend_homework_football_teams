const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');
const API_KEY = require('../helpers/api_key.js');

const Competitions = function () {
this.competitionsData = null;
this.areasData = null
};

Competitions.prototype.bindEvents = function () {
  console.log('competitions bindEvents exists');
  this.getAreasData();
};

Competitions.prototype.getAreasData = function () {
  const url = 'http://api.football-data.org/v2/areas';
    const request = new Request(url);
    request.get({ "X-Auth-Token": API_KEY })
    .then((data) => {
      this.areasData = data;
      console.log(this.areasData)
    })
    .catch((err) => {
      console.error(err);
    })
  };


module.exports = Competitions;
