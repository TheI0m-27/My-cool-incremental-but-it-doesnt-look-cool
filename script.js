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
let boolean3 = false;
let boolean4 = false;
let boolean5_5 = false;
let boolean6 = false;
let boolean7 = false;
let boolean8 = false;
let boolean9 = false;
let updateUpgrade1 = false;
let updateUpgrade2 = false;
let darkMatter = 0;
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
const sPupgrade5_5 = document.getElementById("sPupgrade5_5");
const sPupgrade6 = document.getElementById("sPupgrade6");
const sPupgrade7 = document.getElementById("sPupgrade7");
const sPupgrade8 = document.getElementById("sPupgrade8");
const sPupgrade9 = document.getElementById("sPupgrade9");
const darkMatterDisplay = document.getElementById("darkMatter");
const idk = document.getElementById("idk");
const idk2 = document.getElementById("idk2");
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
supremeReset.innerText = "You have to press this to reset everything for " + sPointGain + " supreme points";
}
}
function reset() {
points = 0;
pointsAdd = 1;
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
if (radioInterval) {
clearInterval(radioInterval);
radioInterval = null;
}
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
poop3.innerText = "x2 point gain from Press for one point has three levels cost " + poop3cost + " points";
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
let haha = true;
let milestoneReset = true;
function reset2() {
reset();
if (milestoneReset === true) {
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
} else {supremeResetAllow = 1; haha = false;}}
loadBoost = 100;
loadUnboost = 1000;
if (haha === true) {
supremeResetAllow = 0;
}
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
function updateUpgrade() {
if (updateUpgrade1 === true) {
sPupgrade.innerText = "Current: * " + (sP * 1e6).toExponential(2);
}
if (updateUpgrade2 === true) {
sPupgrade2.innerText = "Current: * " + (sP * 1e6).toExponential(2);
}
}
supremeReset.onclick = function() {
reset2();
sPoints += sPointGain;
sP += sPGain;
updateSPoints();
sPdisplay.style.visibility = "visible";
sPointsDisplay.style.visibility = "visible";
sPupgrade.style.visibility = "visible";
sPupgrade2.style.visibility = "visible";
if (boolean3 === false) {
sPupgrade3.style.visibility = "visible";
}
if (boolean4 === false) {
sPupgrade4.style.visibility = "visible";
}
sPupgrade5.style.visibility = "visible";
if (boolean5_5 === false) {
sPupgrade5_5.style.visibility = "visible";
}
if (boolean6 === false) {
sPupgrade6.style.visibility = "visible";
}
if (boolean7 === false) {
sPupgrade7.style.visibility = "visible";
}
if (boolean8 === false) {
sPupgrade8.style.visibility = "visible";
}
if (boolean9 === false) {
sPupgrade9.style.visibility = "visible";
}
updateSPdisplay();
updateUpgrade();
};
sPupgrade.onclick = function() {
if (sPoints >= 1) {
sPoints -= 1;
updateUpgrade1 = true;
sPmultiplier = sPmultiplier * (sP * 1e6);
updateSPoints();
sPupgrade.innerText = "Current: * " + (sP * 1e6).toExponential(2);
}
};
sPupgrade2.onclick = function() {
if (sPoints >= 1) {
sPoints -= 1;
updateUpgrade2 = true;
sPmultiplier = sPmultiplier * (sP * 1e6);
updateSPoints();
sPupgrade2.innerText = "Current: * " + (sP * 1e6).toExponential(2);
}
};
sPupgrade3.onclick = function() {
if (sPoints >= 1 && boolean3 === false) {
sPoints -= 1;
updateSPoints();
autoClickMultiplier = 1e6;
limit = 5;
boolean3 = true;
sPupgrade3.style.visibility = "hidden";
startRadioLoop();
}
};
sPupgrade4.onclick = function() {
if (sPoints >= 1 && boolean4 === false) {
sPoints -= 1;
updateSPoints();
limit = 3;
sPmultiplier *= 100;
boolean4 = true;
sPupgrade4.style.visibility = "hidden";
startRadioLoop();
updateSPoints();
}
};
let sPupgrade5cost = 2;
sPupgrade5.onclick = function() {
while (sPoints >= sPupgrade5cost) {
sPoints -= sPupgrade5cost;
sPupgrade5cost *= 4;
sPointGain *= 3;
}
sPupgrade5.innerText = "Cost + " + sPupgrade5cost.toExponential() + " sp supreme point x3 each level";
updateSPoints();
};
sPupgrade5_5.onclick = function() {
if (sPoints >= 4 && boolean5_5 === false) {
sPoints -= 4;
boolean5_5 = true;
sPupgrade5_5.style.visibility = "hidden";
updateSPoints();
milestoneReset = false;
}
};
sPupgrade6.onclick = function() {
if (sPoints >= 5 && boolean6 === false) {
supremeNeed = 1e60;
sPoints -= 5;
boolean6 = true;
updateSPoints();
sPupgrade6.style.visibility = "hidden";
}
};
sPupgrade7.onclick = function() {
if (sPoints >= 20 && boolean7 === false) {
supremeNeed = 1e51;
sPoints -= 20;
boolean7 = true;
updateSPoints();
sPupgrade7.style.visibility = "hidden";
}
};
sPupgrade8.onclick = function() {
if (sPoints >= 30 && boolean8 === false) {
sPoints -= 30;
sPmultiplier *= 1e6;
boolean8 = true;
sPupgrade8.style.visibility = "hidden";
}
};
let interval1;
let darkMatterGain = 0.1;
darkMatterUpdate = function() {
darkMatterDisplay.innerText = "You have " + darkMatter.toFixed(0) + "dark matter";
if (darkMatter >= 1e6) {
darkMatterDisplay.innerText = "You have " + darkMatter.toExponential(0) + " dark matter";
}
};

let darkMatterBoost = false;

a = function() {
clearInterval(interval1);
interval1 = setInterval(() => {
darkMatter += (darkMatterGain / 100); if (darkMatterBoost === true) {darkMatter += darkMatterGain * sP;}
darkMatterUpdate();
}, 10);
};

sPupgrade9.onclick = function() {
if (sPoints >= 60) {
darkMatterDisplay.style.visibility = "visible";
sPoints -= 60;
boolean9 = true;
idk.style.visibility = "visible";
sPupgrade9.style.visibility = "hidden";
interval1 = setInterval(() => {
darkMatter += (darkMatterGain / 100);
darkMatterUpdate();
}, 10);
}
};

let idkUpgradeOff = true;
const idk3 = document.getElementById("idk3");
const idk4 = document.getElementById("idk4");
const idk5 = document.getElementById("idk5");
const idk6 = document.getElementById("idk6");
const idk7 = document.getElementById("idk7");
const idk8 = document.getElementById("idk8");
const idk9 = document.getElementById("idk9");
idk.onclick = function() {
if (idkUpgradeOff === true) {
document.body.style.visibility = "hidden";
idk.style.visibility = "visible";
idk2.style.visibility = "visible";
idk3.style.visibility = "visible";
idk4.style.visibility = "visible";
idk5.style.visibility = "visible";
idk6.style.visibility = "visible";
idk7.style.visibility = "visible";
idk8.style.visibility = "visible";
idk9.style.visibility = "visible";
idkUpgradeOff = false;
} else {
idkUpgradeOff = true;
document.body.style.visibility = "visible";
idk2.style.visibility = "hidden";
idk3.style.visibility = "hidden";
idk4.style.visibility = "hidden";
idk5.style.visibility = "hidden";
idk6.style.visibility = "hidden";
idk7.style.visibility = "hidden";
idk8.style.visibility = "hidden";
idk9.style.visibility = "hidden";
}
};
const pu = document.getElementById("apoints");

pu.onclick = function() {
points += 1e70;
updateGodText();
}

let idkBoolean2 = false;

idk2.onclick = function() {
if (darkMatter >= 1 && idkBoolean2 === false) {
darkMatter -= 1;
darkMatterUpdate();
sPointGain *= 6;
idkBoolean2 = true;
darkMatterUpdate();
idk2.style.backgroundColor = "rgba(30,0,50,1)";
}
};

let idkBoolean3 = false;

idk3.onclick = function() {if (sPoints >= 1e12 && idkBoolean3 === false) {sPoints -= 1e12; idkBoolean3 = true; darkMatterGain *= 100; a(); idk3.style.backgroundColor = "rgba(30,0,50,1)";}}

let idkBoolean4 = false;
idk4.onclick = function() {if (darkMatter >= 1 && idkBoolean4 === false) {darkMatter -= 1; darkMatterUpdate(); sPmultiplier *= 5; sPGain *= 20; idkBoolean4 = true; idk4.style.backgroundColor = "rgba(30,0,50,1)";}}
let idkBoolean5 = false;
idk5.onclick = function() {if (darkMatter >= 100 && idkBoolean5 === false) {darkMatter -= 100; darkMatterUpdate(); darkMatterBoost = true; idkBoolean5 = true; idk5.style.backgroundColor = "rgba(30,0,50,1)";}}
let idkBoolean6 = false;
idk6.onclick = function() {if (darkMatter >= 10e3 && idkBoolean6 === false) {darkMatter -= 10000; darkMatterUpdate(); idkBoolean6 = true; sPGain **= 2; idk6.style.backgroundColor = "rgba(30,0,50,1)";}}
let idkBoolean7 = false;
idk7.onclick = function() {if (darkMatter >= 4e5 && idkBoolean7 === false) {darkMatter -= 4e5; darkMatterUpdate(); darkMatterGain *= 1e6; idkBoolean7 = true; supremeReset.style.display = "none"; poop.style.display = "none"; poop2.style.display = "none"; poop3.style.display = "none"; radio.style.display = "none"; radio2.style.display = "none"; radio3.style.display = "none"; idk7.style.backgroundColor = "rgba(30,0,50,1)"; a(); setInterval(() => {sPoints += sPointGain / 100; sP *= sPGain / 100; updateSPdisplay(); updateSPoints();}, 10);}}
let idkBoolean8 = false;
idk8.onclick = function() {if (darkMatter >= 400e6 && idkBoolean8 === false) {darkMatter -= 400e6; sPointGain **= 2; idkBoolean8 = true; darkMatterUpdate(); idk8.style.display = "none"; idk8.style.backgroundColor = "rgba(30,0,50,1)";}}
