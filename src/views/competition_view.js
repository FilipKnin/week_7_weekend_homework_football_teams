const CompetitionView = function (container, competitionObject) {
  this.container = container;
  this.competitionObject = competitionObject;
};

CompetitionView.prototype.render = function () {
  const competition = this.competitionObject;

  const newParagraph = document.createElement('p');
  newParagraph.textContent = `Competitions name: ${competition.name}`;
  console.log('CompetitionView has newParagraph', newParagraph);
  this.container.appendChild(newParagraph);
};



module.exports = CompetitionView;
