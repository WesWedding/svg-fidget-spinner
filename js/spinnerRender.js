const TweenMax = require('gsap').TweenMax;
var frameRequestId;
var spinnerState;
var element;

const SpinnerRender = {
  setup: function(ele, state) {
    element = ele;
    spinnerState = state;
  },
  run: function() {
    (function loop(time) {
      TweenMax.set(element, {transformOrigin: "50% 50%"});
      frameRequestId = window.requestAnimationFrame(loop);
      render();
    })();
  }
}

function render() {
  var degrees = spinnerState.angle * 180 / Math.PI;
  TweenMax.set(element, {rotation: degrees})
}

module.exports = SpinnerRender;
