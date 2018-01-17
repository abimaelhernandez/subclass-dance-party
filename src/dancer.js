// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
 this.top = top;
 this.left = left;
 this.timeBetweenSteps = timeBetweenSteps;
 this.$node = $('<span class="dancer"></span>');
 this.setPosition(top, left);
 this.step();
};
 // this.lineUp = false;


 // this.setPosition(this.top, this.left);????


Dancer.prototype.step = function() {
 setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
 // test out using a wrapper function here
 // lots of question on 'this' ^

// setTimeout(this.step what is the context within here???, this.timeBetweenSteps);

Dancer.prototype.setPosition = function(top, left) {
 var styleSettings = {
   top: top,
   left: left
 };
 this.$node.css(styleSettings);
};

Dancer.prototype.lineup = function() {
 // this.lineUp = true;
 clearTimeout(this.$node.step);
 this.$node.animate(({
   left: "20px"
 }))

}
