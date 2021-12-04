var part1 = document.getElementById("part1");
var part2 = document.getElementById("part2");
var part3 = document.getElementById("part3");

window.onload = function () {
  part2.style.display = "none";
  part3.style.display = "none";
};

function show1() {
  if (part2.style.display == "block") {
    part2.style.display = "none";
  } else {
    part2.style.display = "none";
  }
  if (part3.style.display == "block") {
    part3.style.display = "none";
  } else {
    part3.style.display = "none";
  }
  if (part1.style.display == "none") {
    part1.style.display = "block";
  } else {
    part1.style.display = "block";
  }
}
function show2() {
  if (part1.style.display == "block") {
    part1.style.display = "none";
  } else {
    part1.style.display = "none";
  }
  if (part3.style.display == "block") {
    part3.style.display = "none";
  } else {
    part3.style.display = "none";
  }
  if (part2.style.display == "none") {
    part2.style.display = "block";
  } else {
    part2.style.display = "block";
  }
}
function show3() {
  if (part2.style.display == "block") {
    part2.style.display = "none";
  } else {
    part2.style.display = "none";
  }
  if (part1.style.display == "block") {
    part1.style.display = "none";
  } else {
    part1.style.display = "none";
  }
  if (part3.style.display == "none") {
    part3.style.display = "block";
  } else {
    part3.style.display = "block";
  }
}
