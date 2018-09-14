const Competitions = require('./models/competitions.js');


document.addEventListener('DOMContentLoaded', () => {
  const competitions = new Competitions();
  competitions.bindEvents();
});
