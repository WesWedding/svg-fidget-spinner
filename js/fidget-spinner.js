const Physics = require('./physics')
const Renderer = require('./spinnerRender')
const Draggable = require('gsap/Draggable');

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

  Draggable.create('svg #Page-1', {type: "rotation", throwProps: true, onDragStart: spinnerDragStart, onDragEnd: spinnerDragEnd, onDrag: onSpinnerDrag})[0];

});

function spinnerDragStart(e) {
  Physics.stopSpinning();
}

function spinnerDragEnd() {
  Physics.setAngle(this.rotation * Math.PI / 180);
  this.target.style.transform = null;
}

function onSpinnerDrag() {
  Physics.setAngle(this.rotation * Math.PI / 180);
}

function loop(time) {
  window.requestAnimationFrame(loop);
  var stats = Physics.getStats();
  physicsState.angle = stats.angle;
  document.querySelector('.ang-v').innerHTML = stats.angV;
};
