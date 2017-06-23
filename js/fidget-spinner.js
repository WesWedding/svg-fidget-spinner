const Physics = require('./physics')
const Renderer = require('./spinnerRender')
const Draggable = require('gsap/Draggable');


//debug while I figure out particles
const Sparks = require('./sparks')
const Smoke = require('./smoke')

var physicsState = {angV: 0, angle: 0};

Physics.init({mass: 10, armLength: 10});

document.addEventListener('DOMContentLoaded', function() {
  Sparks.setup();
  Smoke.setup();

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

let sparking = false;
let smoking = false;
function loop(time) {
  window.requestAnimationFrame(loop);
  var stats = Physics.getStats();
  physicsState.angle = stats.angle;
  physicsState.angV = stats.angV;
  document.querySelector('.ang-v').innerHTML = stats.angV;

  if (physicsState.angV > 0.5 && !smoking) {
    Smoke.playSmoke();
    smoking = true;
  }

  if (physicsState.angV > 0.7 && !sparking) {
    Sparks.playSparks();
    sparking = true;
  }
};
