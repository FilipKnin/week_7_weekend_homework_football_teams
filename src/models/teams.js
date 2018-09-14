const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const Teams = function () {
this.teams = null;
};

Teams.prototype.bindEvents = function () {
  // console.log('bindEvents exists');
  this.getData();
};

Teams.prototype.getData = function () {

};

module.exports = Teams;
