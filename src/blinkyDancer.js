var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments)
}
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
//var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
//var oldStep = blinkyDancer.step;
BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
  //return blinkyDancer;
}
// call the old version of step at the beginning of any call to this new version of step
// toggle() is a jQuery method to show/hide the <span> tag.
// See http://api.jquery.com/category/effects/ for this and
// other effects you can use on a jQuery-wrapped html tag.
blinkyDancer.prototype.changeColor = function (){
this.$node.on('click', function() {
//$(this).css("color", "blue");
});
}
