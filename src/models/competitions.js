const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');
const API_KEY = require('../helpers/api_key.js');

const Competitions = function () {
this.teams = null;
};

Competitions.prototype.bindEvents = function () {
  console.log('competitions bindEvents exists');
  this.getAreasData();
};

Competitions.prototype.getAreasData = function () {
  // const url = 'https://munroapi.herokuapp.com/api/munros';
  //   const request = new Request(url);
  //   request.get()
  //   .then((data) => {
  //     this.data = data;
  //     const regionArray = data.map(munro => munro.region)
  //     const filteredArray = [...new Set(regionArray)]
  //     PubSub.publish('Munros:all-regions', filteredArray);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   })
  // };
};

module.exports = Competitions;
