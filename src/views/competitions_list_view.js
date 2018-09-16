const PubSub = require('../helpers/pub_sub.js');
const CompetitionView = require('./competition_view.js');

const CompetitionsListView = function (container) {
this.container = container;
};

CompetitionsListView.prototype.bindEvents = function () {
PubSub.subscribe('Competitions:selected-competitions-objects', (event) => {
  this.competitionsObjects = event.detail;
  console.log('CompetitionListView.bindEvents has this.competitionsObjects', this.competitionsObjects);
  this.render();
});


CompetitionsListView.prototype.render = function () {
  this.container.innerHTML = "";
  this.competitionsObjects.forEach((competition) => {
    const competitionsDetails = new CompetitionView(this.container, competition);
    competitionsDetails.render();
  });
};


};




module.exports = CompetitionsListView;
