const Competitions = require('./models/competitions.js');
const SelectView = require('./views/select_view.js');


document.addEventListener('DOMContentLoaded', () => {

  const competitions = new Competitions();
  competitions.bindEvents();

  const areaDropMenu = document.querySelector("#area-menu");
  // console.log('App.js has areaDropMenu:', areaDropMenu);
  const selectview = new SelectView(areaDropMenu);
  selectview.bindEvents();


});
