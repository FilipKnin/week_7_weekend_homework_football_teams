const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (container) {
this.container = container;
};

SelectView.prototype.bindEvents = function () {
  console.log('SelectView has bindEvents');
  PubSub.subscribe('Competitions:all-areas-names', (event) => {
    console.log('SelectView has event:', event);
    const areasNames = event.detail;
    console.log('SelectView has areasNames:', areasNames);
    console.log(this);
    this.populate(areasNames);
  });

  SelectView.prototype.populate = function (areasNames) {
    areasNames.forEach((name) => {
      const newOption = document.createElement('option');
      newOption.textContent = name;
      newOption.value = name;
      // console.log('populate has newOption:', newOption);
      this.container.appendChild(newOption);
    });
  };
};

module.exports = SelectView;
