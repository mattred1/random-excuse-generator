var excuse = [
  "Excuse1",
  "Excuse2",
  "Excuse16",
  "Excuse17",
  "Excuse13",
  "Excuse14",
  "Excuse15",
  "Excuse6",
  "Excuse7",
  "Excuse8",
  "Excuse9",
  "Excuse10"
];
var getExcuses = function () {
  var newExcuse = excuse[Math.floor(Math.random() * excuse.length)];
  document.getElementById("excuseHere").innerHTML = newExcuse;
};
