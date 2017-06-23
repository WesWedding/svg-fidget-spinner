/**
 * Created by weston on 6/23/17.
 */
const Matter = require('matter-js')

// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;


// create two boxes and a ground
var circle = Bodies.circle(400, 200, 200, {}, 10);
Matter.Body.setAngularVelocity(circle, 0);

const SpinnerPhysics = {
  init: function(showDebug) {
    // create an engine
    var engine = Engine.create();

    // add all of the bodies to the world
    World.add(engine.world, [circle]);

    engine.world.gravity = {x: 0, y: 0};

    // run the engine
    Engine.run(engine);


    if (showDebug === true) {

      // create a debug renderer
      var debugRenderer = Render.create({
        element: document.body,
        engine: engine
      });

      // run the renderer
      Render.run(debugRenderer);
    }
  },
  setAngle: function(radians) {
    circle.angle = radians;
  },
  getStats: function() {
    return {
      angV: circle.angularVelocity,
      angle: circle.angle
    }
  },
  bump: function() {
    Matter.Body.setAngularVelocity(circle, circle.angularVelocity + 0.1);
  },
  stopSpinning: function() {
    Matter.Body.setAngularVelocity(circle, 0);
  }
}


module.exports = SpinnerPhysics;
