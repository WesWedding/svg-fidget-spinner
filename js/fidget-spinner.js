const Physics = require('./physics')

Physics.init({mass: 10, armLength: 10});

document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', function(e) {
    Physics.addAngularV(129);
    var stats = Physics.getStats();
    document.querySelector('.ang-v').innerHTML = stats.angV;
  })
});
