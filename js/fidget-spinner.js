const Physics = require('./physics')
const Renderer = require('./spinnerRender')
const TweenLite = require('gsap').TweenLite;

var physicsState = {};

Physics.init({mass: 10, armLength: 10});

document.addEventListener('DOMContentLoaded', function() {
  physicsState.angle = Physics.getStats().angle;
  Renderer.setup(document.querySelector('svg #Page-1'), physicsState);

  document.body.addEventListener('click', function(e) {
    Physics.bump();
  })

  loop();
  Renderer.run();
});

function loop(time) {
  window.requestAnimationFrame(loop);
  var stats = Physics.getStats();
  physicsState.angle = stats.angle;
  document.querySelector('.ang-v').innerHTML = stats.angV;
};
