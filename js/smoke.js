var mojs = require('mo-js');

const SMOKE_DURATION = 8000;
const SMOKE_COUNT = 40;

var smokeburstLeft,
smokeburstRight;


const Smoke = {
  setup: function() {
    smokeburstLeft = new mojs.Burst({
      radius: { 50: 600 },
      opacity: { 0.6 : 0 },
      count: SMOKE_COUNT,
      degree: -10,
      children: {
        shape: 'circle',
        fill: 'grey',
        radius: 'rand(10, 20)',
        duration: SMOKE_DURATION,
        delay: 'stagger(rand(0, 100))'
      }
    })

    smokeburstRight = new mojs.Burst({
      radius: { 50: 600 },
      opacity: { 0.6 : 0 },
      count: SMOKE_COUNT,
      degree: 10,
      children: {
        shape: 'circle',
        fill: 'grey',
        radius: 'rand(10, 20)',
        duration: SMOKE_DURATION,
        delay: 'stagger(rand(0, 100))'
      }
    })
  },
  playSmoke: function() {
    smokeburstLeft.play()
    smokeburstRight.play()
  }
}

module.exports = Smoke;
