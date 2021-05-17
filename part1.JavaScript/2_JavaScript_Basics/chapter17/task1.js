/*
Replace the function expression code with an arrow function

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you confirm?",
    function() { alert("You've confirmed execution."); },
    function() { alert("You've declined execution."); }
  );
*/

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

ask(
    "Do you confirm?",
    () => { alert("You've confirmed execution."); },
    () => { alert("You've declined execution."); }
);