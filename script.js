let points = 0;
let pointsAdd = 1;
let limit = 10;
let radioBoost = 3;
let speed = 1000;
let poop3cost = 10;
let poop3buy = 0;
let radioInterval;
let mM = 1;
let milestone2poop = 0;
let autoClickSpeed = 500;
let milestone1allow = 1;
let milestone2allow = 1;
let milestone3poop = 0;
let milestone3allow = 1;
let autoClickInterval;

const poop = document.getElementById("poop");
const god = document.getElementById("god");
const poop2 = document.getElementById("poop2");
const radio = document.getElementById("radio");
const radio2 = document.getElementById("radio2");
const poop3 = document.getElementById("poop3");
const radio3 = document.getElementById("radio3");
const milestone1 = document.getElementById("milestone1");
const milestone2 = document.getElementById("milestone2");
const milestone3 = document.getElementById("milestone3");
const autoclick1 = document.getElementById("autoclick1");
const autoclick2 = document.getElementById("autoclick2");

function updateGodText() {
  god.innerText = "You have " + Math.floor(points) + " points";
  if (points >= 1e6) {
    god.innerText = "You have " + points.toExponential(2) + " points";
  }
  
  if (points >= 10000 && milestone1allow === 1) {
    milestone1.style.visibility = "visible";
  } 
  if (points >= 1e6 && milestone2poop === 1 && milestone2allow === 1) {
    milestone2.style.visibility = "visible";
  } 
  if (points >= 1e8 && milestone3poop === 1 && milestone3allow === 1) {
    milestone3.style.visibility = "visible";
  }
} 

function reset() {
  points = 0;
  pointsAdd = 1;
  limit = 10;
  radioBoost = 3;
  speed = 1000;
  poop3buy = 0;
  poop3cost = 10;
  poop.innerText = "Press to get " + (pointsAdd * mM) + " points";
  poop3.innerText = "x2 point gain from Press for one point has 3 levels " + poop3cost + " points";
  
  radio.style.visibility = "hidden";
  radio2.style.visibility = "hidden";
  radio3.style.visibility = "hidden";
  milestone1.style.visibility = "hidden";
  milestone2.style.visibility = "hidden";
  milestone3.style.visibility = "hidden";
  
  poop2.style.visibility = "visible";
  poop3.style.visibility = "visible";
  updateGodText();
}

function startRadioLoop() {
  if (radioInterval) {
    clearInterval(radioInterval);
  }
  radioInterval = setInterval(function() {
    let radioChance = Math.floor(Math.random() * limit); 
    if (radioChance === 1) {
      radio.innerText = "Clicker press to get + points x " + radioBoost + " ^0.91";
    }
  }, speed);
}

function autoClickRestart() {
  clearInterval(autoClickInterval); 
  autoClickInterval = setInterval(() => {
    points += pointsAdd * mM; 
    updateGodText();
  }, autoClickSpeed);
}

poop.onclick = function() {
  points += pointsAdd * mM;
  updateGodText();
};

poop2.onclick = function() {
  if (points >= 10) {
    points -= 10; 
    updateGodText(); 
    radio.style.visibility = "visible";
    radio2.style.visibility = "visible";
    poop2.style.visibility = "hidden";
    radio3.style.visibility = "visible";
    startRadioLoop();
  }
};

radio.onclick = function() {
  if (radio.innerText === "Clicker press to get + points x " + radioBoost + " ^0.91") {
    points = ((points * radioBoost) ** 0.91) * mM; 
    radio.innerText = ""; 
    updateGodText();
  }
};

radio2.onclick = function() {
  if (points >= 100) {
    points -= 100; 
    speed /= 2; 
    startRadioLoop();
    radio2.style.visibility = "hidden"; 
    updateGodText();
  }
};

poop3.onclick = function() {
  if (points >= poop3cost) {
    points -= poop3cost;
    poop3cost *= 2; 
    pointsAdd *= 2; 
    updateGodText();
    poop.innerText = "Press to get " + (pointsAdd * mM) + " points";
    poop3.innerText = "x2 point gain from Press for 1 point has three levels cost " + poop3cost + " points"; 
    poop3buy += 1; 
    if (poop3buy === 3) {
      poop3.style.visibility = "hidden";
    }
  }
};

radio3.onclick = function() {
  if (points >= 120) {
    points -= 120; 
    radioBoost *= 2; 
    updateGodText(); 
    radio3.style.visibility = "hidden";
  }
};

milestone1.onclick = function() { 
  milestone2poop = 1;
  milestone1allow = 0;
  reset();
  mM = 2;
  speed = 500;
  poop.innerText = "Press to get " + (pointsAdd * mM) + " points";
  updateGodText();
};

milestone2.onclick = function() {
  milestone3poop = 1;
  milestone2allow = 0;
  reset(); 
  mM = 4; 
  speed = 500; 
  poop.innerText = "Press to get " + (pointsAdd * mM) + " points";
  autoclick1.style.visibility = "visible"; 
  autoclick2.style.visibility = "visible";
  autoClickRestart();
  updateGodText();
};

milestone3.onclick = function() {
  milestone3allow = 0;
  reset(); 
  mM *= 3; 
  speed = 500; 
  poop.innerText = "Press to get " + (pointsAdd * mM) + " points";
  updateGodText();
};

autoclick1.onclick = function() {
  if (points >= 1e5) {
    points -= 1e5;
    autoClickSpeed /= 2; 
    updateGodText();
    autoclick1.style.visibility = "hidden";
    autoClickRestart();
  }
};

autoclick2.onclick = function() { 
  if (points >= 2e5) {
    points -= 2e5; 
    autoClickSpeed /= 5; 
    updateGodText(); 
    autoclick2.style.visibility = "hidden"; 
    autoClickRestart();
  }
}; //i originally made it on codepen so i forked the code
