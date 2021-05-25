/*
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // displays current step
    alert( this.step );
  }
};

Modify the code of the 'up', 'down', and 'showStep' methods in such a way 
that they can be called in a chain, for example like this:

ladder.up().up().down().showStep().down().showStep();
*/

let ladder = {
    step: 0,
    up() {
        ++this.step;
        return this;
    },
    down() {
        --this.step;
        return this;
    },
    showStep: function () {
        alert(this.step);
        return this;
    }
};