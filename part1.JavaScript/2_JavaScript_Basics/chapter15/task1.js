/*
Rewrite this function:

1. Using ?
2. Using ||

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Parents allowed");
  }
}
*/

function checkAge1(age) {
    return (age > 18) ? true : confirm("Parents allowed");
}

function checkAge2(age) {
    return (age > 18 || confirm("Parents allowed"));
}