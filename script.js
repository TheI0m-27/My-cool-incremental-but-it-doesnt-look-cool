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
let milestone4poop = 0;
let milestone5poop = 0;
let milestone3allow = 1;
let milestone4allow = 1;
let milestone5allow = 1;
let autoClickInterval;
let loadBoost = 100;
let loadUnboost = 1000;
let supremeResetAllow = 0;
let sP = 0;
let sPoints = 0;
let sPmultiplier = 1;
let radioReady = false;
let autoClickMultiplier = 1;
let supremeNeed = 1e70;
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
const click = document.getElementById("click");
const click2 = document.getElementById("click2");
const click3 = document.getElementById("click3");
const milestone4 = document.getElementById("milestone4");
const load = document.getElementById("load");
const milestone5 = document.getElementById("milestone5");
const supremeReset = document.getElementById("supremeReset");
const sPdisplay = document.getElementById("sPdisplay");
const sPointsDisplay = document.getElementById("sPointsDisplay");
const sPupgrade = document.getElementById("sPupgrade");
const sPupgrade2 = document.getElementById("sPupgrade2");
const sPupgrade3 = document.getElementById("sPupgrade3");
const sPupgrade4 = document.getElementById("sPupgrade4");
const sPupgrade5 = document.getElementById("sPupgrade5");
const sPupgrade6 = document.getElementById("sPupgrade6");
const sPupgrade7 = document.getElementById("sPupgrade7");
const sPupgrade8 = document.getElementById("sPupgrade8");
function updateGodText() {
if (points > 1e70) {
points = 1e70;
}

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

if (points >= 1e14 && milestone4poop === 1 && milestone4allow === 1) {
milestone4.style.visibility = "visible";
}

if (points >= 1e30 && milestone5poop === 1 && milestone5allow === 1) {
milestone5.style.visibility = "visible";
}

if (points >= supremeNeed && supremeResetAllow === 1) {
points = supremeNeed;
supremeReset.style.visibility = "visible";
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
radioReady = false;
poop.innerText = "Press to get " + (pointsAdd * mM * sPmultiplier) + " points";
poop3.innerText = "x2 point gain from Press for one point has 3 levels " + poop3cost + " points";

radio.style.visibility = "hidden";
radio2.style.visibility = "hidden";
radio3.style.visibility = "hidden";
milestone1.style.visibility = "hidden";
milestone2.style.visibility = "hidden";
milestone3.style.visibility = "hidden";

poop2.style.visibility = "visible";
poop3.style.visibility = "visible";
click.style.visibility = "visible";
click2.style.visibility = "visible";
click3.style.visibility = "visible";

updateGodText();
}

function startRadioLoop() {
if (radioInterval) {
clearInterval(radioInterval);
}

radioInterval = setInterval(function() {
let radioChance = Math.floor(Math.random() * limit);

if (radioChance === 1 && !radioReady) {
radioReady = true;
radio.innerText = "Clicker press to get + points x " + radioBoost + " ^0.91";
}

}, speed);
}

function autoClickRestart() {
clearInterval(autoClickInterval);

autoClickInterval = setInterval(() => {
points += pointsAdd * mM * sPmultiplier * autoClickMultiplier;
updateGodText();
}, autoClickSpeed);
}

poop.onclick = function() {
points += pointsAdd * mM * sPmultiplier;
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
if (radioReady) {
points = ((points * radioBoost) ** 0.91) * mM * sPmultiplier;
radioReady = false;
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
poop.innerText = "Press to get " + (pointsAdd * mM * sPmultiplier) + " points";
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
poop.innerText = "Press to get " + (pointsAdd * mM * sPmultiplier) + " points";
updateGodText();
};

milestone2.onclick = function() {
milestone3poop = 1;
milestone2allow = 0;
reset();
mM = 4;
speed = 500;
poop.innerText = "Press to get " + (pointsAdd * mM * sPmultiplier) + " points";
autoclick1.style.visibility = "visible";
autoclick2.style.visibility = "visible";
autoClickRestart();
updateGodText();
};

milestone3.onclick = function() {
milestone3allow = 0;
milestone4poop = 1;
reset();
mM *= 100;
speed = 166;
poop.innerText = "Press to get " + (pointsAdd * mM * sPmultiplier) + " points";
updateGodText();
};

milestone4.onclick = function() {
milestone4allow = 0;
reset();
mM *= 1e6;
speed = 166;
poop.innerText = "Press to get " + (pointsAdd * mM * sPmultiplier) + " points";
load.style.visibility = "visible";
milestone4.style.visibility = "hidden";
milestone5poop = 1;
updateGodText();
};

milestone5.onclick = function() {
milestone5allow = 0;
reset();
mM *= 5;
speed = 50;
loadBoost = 1e6;
loadUnboost = 1e7;
poop.innerText = "Press to get " + (pointsAdd * mM * sPmultiplier) + " points";
milestone5.style.visibility = "hidden";
supremeResetAllow = 1;
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
};

click.onclick = function() {
if (points >= 700) {
points -= 700;
updateGodText();
pointsAdd *= 2;
poop.innerText = "Press for " + (pointsAdd * mM * sPmultiplier) + " points";
radioBoost *= 2;
click.style.visibility = "hidden";
}
};

click2.onclick = function() {
if (points >= 8e4) {
points -= 8e4;
click2.style.visibility = "hidden";
pointsAdd *= 50;
poop.innerText = "Press to get " + (pointsAdd * mM * sPmultiplier) + " points";
updateGodText();
}
};

click3.onclick = function() {
if (points >= 1e7) {
pointsAdd *= 4;
points -= 1e7;
click3.style.visibility = "hidden";
poop.innerText = "Press to get " + (pointsAdd * mM * sPmultiplier) + " points";
updateGodText();
}
};

load.onclick = function() {
load.disabled = true;
updateGodText();

let random = Math.floor(Math.random() * 10);

if (random === 1) {
points /= loadUnboost;
} else {
points *= loadBoost;
}

updateGodText();

setTimeout(() => {
load.disabled = false;
}, 60000);
};

function reset2() {
reset();

milestone1allow = 1;
milestone2allow = 1;
milestone3allow = 1;
milestone4allow = 1;
milestone5allow = 1;

milestone2poop = 0;
milestone3poop = 0;
milestone4poop = 0;
milestone5poop = 0;

mM = 1;
autoClickSpeed = 500;

if (autoClickInterval) {
clearInterval(autoClickInterval);
}

loadBoost = 100;
loadUnboost = 1000;
supremeResetAllow = 0;

autoclick1.style.visibility = "hidden";
autoclick2.style.visibility = "hidden";
load.style.visibility = "hidden";
milestone4.style.visibility = "hidden";
milestone5.style.visibility = "hidden";
supremeReset.style.visibility = "hidden";

poop.innerText = "Press to get " + (pointsAdd * mM * sPmultiplier) + " points";
updateGodText();
}

function updateSPoints() {
sPointsDisplay.innerText = "You have " + sPoints + " supreme points";
}

function updateSPdisplay() {
sPdisplay.innerText = "You have " + sP + " supreme resets";
}

let sPointGain = 1;
let sPGain = 1;

function updateUpgrade() {if (updateUpgrade1 === true) {sPupgrade.innerText = "Current: * " + (sP * 1e6).toExponential(2);} if (updateUpgrade2 === true) {sPupgrade2.innerText = "Current: * " + (sP * 1e6).toExponential(2);}} 

  
supremeReset.onclick = function() {
reset2();
sPoints += sPointGain;
sP += sPGain;
updateSPoints();
sPdisplay.style.visibility = "visible";
sPointsDisplay.style.visibility = "visible";
sPupgrade.style.visibility = "visible";
sPupgrade2.style.visibility = "visible";
sPupgrade3.style.visibility = "visible";
sPupgrade4.style.visibility = "visible";
sPupgrade5.style.visibility = "visible";
sPupgrade6.style.visibility = "visible";
sPupgrade7.style.visibility = "visible";
sPupgrade8.style.visibility = "visible";
updateSPdisplay(); updateUpgrade();
}

let updateUpgrade1 = false;
let updateUpgrade2 = false;

sPupgrade.onclick = function() {
if (sPoints >= 1) {
sPoints -= 1; updateUpgrade1 = true;
sPmultiplier = sPmultiplier * (sP * 1e6);
updateSPoints();
sPupgrade.innerText = "Current: * " + (sP * 1e6).toExponential(2); sPupgrade.style.visibility = "hidden";
}
};

sPupgrade2.onclick = function() {if (sPoints >= 1) {sPoints -= 1; updateUpgrade2 = true; sPmultiplier = sPmultiplier * (sP * 1e6); updateSPoints(); sPupgrade2.innerText = "Current: * " + (sP * 1e6).toExponential(2);}}

sPupgrade3.onclick = function() {if (sPoints >= 3) {sPoints -= 3; updateSPoints(); autoClickMultiplier = 1e6; limit = 5; sPupgrade3.style.visibility = "hidden";}}
sPupgrade4.onclick = function() {if (sPoints >= 5) {sPoints -= 5; updateSPoints(); limit = 3; sPmultiplier *= 100; sPupgrade4.style.visibility = "hidden";}}
let sPupgrade5cost = 10;
sPupgrade5.onclick = function() {if (sPoints >= sPupgrade5cost) {sPupgrade5cost *= 10; sPupgrade5.innerText = "Cost + " + sPupgrade5cost.toExponential() + " sp supreme point x3 each level"; sPointGain *= 3; updateSPoints();}}
sPupgrade6.onclick = function() {if (sPoints >= 60) {supremeNeed = 1e60; sPoints -= 60; updateSPoints(); sPupgrade6.style.visibility = "hidden";}}
sPupgrade7.onclick = function() {if (sPoints >= 200) {supremeNeed = 1e51; sPoints -= 200; updateSPoints(); sPupgrade7.style.visibility = "hidden";}}
  sPupgrade8.onclick = function() {if (sPoints >= 2000) {sPoints -= 2000; supremeMultiplier *= 1e6;}}
//i originally made it on codepen so i forked the code
