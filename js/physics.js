/**
 * Created by weston on 6/23/17.
 */

var mass = 0;
var armLength = 0;
var angularVelocity = 0;


const SpinnerPhysics = {
    init: function(config) {
      mass = config.mass;
      armLength = config.armLength;
      angularVelocity = 0;
    },
    addAngularV: function (amount) {
      angularVelocity += amount;
    }
}

module.exports = SpinnerPhysics;
