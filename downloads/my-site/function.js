let clicks = 0;

function sayHi() {
  clicks = clicks + 1;
  document.getElementById("message").textContent =
    "You clicked " + clicks + " time(s)!";
}
