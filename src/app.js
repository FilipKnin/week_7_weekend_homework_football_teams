const Teams = require('./models/teams.js');


document.addEventListener('DOMContentLoaded', () => {
  const teams = new Teams();
  teams.bindEvents();
});
