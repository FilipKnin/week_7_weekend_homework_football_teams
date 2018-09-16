const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');
const API_KEY = require('../helpers/api_key.js');

const Competitions = function () {
this.competitionsData = null;
this.areasData = null
};

Competitions.prototype.bindEvents = function () {
  // console.log('competitions bindEvents exists');
  this.getAreasData();
  this.getCompetitionsData();

  PubSub.subscribe('SelectView:selected-area-name', (event) => {
    const selectedAreaName = event.detail;
    console.log('Competitions.bindEvents has selectedAreaName:', selectedAreaName);
    this.getCompetitionObjects(selectedAreaName);
  });


};

Competitions.prototype.getAreasData = function () {
  const url = 'http://api.football-data.org/v2/areas';
    const request = new Request(url);
    request.get({ "X-Auth-Token": API_KEY })
    .then((data) => {
      // console.log('Competitions.getAreasData has data:', data);
      this.areasData = data.areas;
      // console.log('Competitions.getAreasData has this.areasData:', this.areasData);
      const areasNames = data.areas.map(area => area.name);
      // console.log('Competitions.getAreasData has areasNames:', areasNames);
      PubSub.publish('Competitions:all-areas-names', areasNames);
    })
    .catch((err) => {
      console.error(err);
    })
  };

  Competitions.prototype.getCompetitionsData = function () {
    const url = 'http://api.football-data.org/v2/competitions/';
      const request = new Request(url);
      request.get({ "X-Auth-Token": API_KEY })
      .then((data) => {
        console.log('Competitions.getCompetitionsData has data:', data);
        this.competitionsData = data.competitions;
        console.log('Competitions.getCompetitionsData has this.competitionsData:', this.competitionsData);
      })
      .catch((err) => {
        console.error(err);
      })
  };

  Competitions.prototype.getCompetitionObjects = function (selectedAreaName) {
    // console.log('Competitions.getCompetitionObject has this.competitionsData:', this.competitionsData);
    // console.log('Competitions.getCompetitionObject has selectedAreaName:', selectedAreaName);
    // console.log(this.competitionsData[0].area.name);
    const selectedObjects = this.competitionsData.filter((competition) => competition.area.name === selectedAreaName);
    // console.log('Competitions.getCompetitionObject has selectedCompetitionsObjects:', selectedCompetitionsObjects);
    PubSub.publish('Competitions:selected-competitions-objects', selectedObjects);
    //filter
    //publish
  };


module.exports = Competitions;
