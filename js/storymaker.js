// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const btnNoun1 = document.getElementById("noun1");
const btnVerb = document.getElementById("verb");
const btnAdjective = document.getElementById("adjective");
const btnNoun2 = document.getElementById("noun2");
const btnSetting = document.getElementById("setting");
const pInfo = document.getElementById("studentInfo");

// Constants for p tag to display query selectors
const pNoun1 = document.getElementById("choosenNoun1");
const pVerb = document.getElementById("choosenVerb");
const pAdjective = document.getElementById("choosenAdjective");
const pNoun2 = document.getElementById("choosenNoun2");
const pSetting = document.getElementById("choosenSetting");
const pStory = document.getElementById("story");

// Constants for final buttons and p tags
const btnPlayback = document.getElementById("playback");
const btnRandom = document.getElementById("random");
const btnReset = document.getElementById("reset");
const btnShowStudentInfo = document.getElementById("showStudentInfo");
// Variables for pre-defined arrays
const nouns1 = ["The turkey", "Mom","Dad","The dog","The teacher","The elephant","The cat"]; 
const verbs = ["sat on","ate","danced with","saw","doesn't like","kissed"];
const adjectives = ["a funny","a scary","a goofy","a slimy","a barking","a fat"];
const nouns2 = ["goat","monkey","fish","cow","frog","bug","worm"];
const settings = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    pNoun1.textContent = nouns1[noun1Count];

    // if-else to change count setting
    if (noun1Count < nouns1.length - 1) {
        noun1Count++;
    } else {
        noun1Count = 0;
    }
}


function verb_on_click() {
    pVerb.textContent = verbs[verbCount];//display verb
    if (verbCount < verbs.length - 1) {//if else to change count setting
        verbCount++;
    } else {
        verbCount = 0;
    }
}

function adjective_on_click() {//display adjective
    pAdjective.textContent = adjectives[adjectiveCount];//if else to change count setting
    if (adjectiveCount < adjectives.length - 1) {
        adjectiveCount++;
    } else {
        adjectiveCount = 0;
    }
}

function noun2_on_click() {//display noun2
    pNoun2.textContent = nouns2[noun2Count];//If else to change count setting
    if (noun2Count < nouns2.length - 1) {
        noun2Count++;
    } else {
        noun2Count = 0;
    }
}

function setting_on_click() {//Display settings
    pSetting.textContent = settings[settingCount];//if else to change count setting
    if (settingCount < settings.length - 1) {
        settingCount++;
    } else {
        settingCount = 0;
    }
}

//making a sentence with connecting all the words in a line.
function playback_on_click() {
    const story = `${pNoun1.textContent} ${pVerb.textContent} ${pAdjective.textContent} ${pNoun2.textContent} ${pSetting.textContent}`;
    pStory.textContent = story;
}
//using random to show the random sentence.
function random_on_click() {
    const story = `${nouns1[Math.floor(Math.random() * nouns1.length)]} ${verbs[Math.floor(Math.random() * verbs.length)]} ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns2[Math.floor(Math.random() * nouns2.length)]} ${settings[Math.floor(Math.random() * settings.length)]}`;
    pStory.textContent = story;
}

function reset_on_click() {
    // Reset the counts
    noun1Count = 0;
    verbCount = 0;
    adjectiveCount = 0;
    noun2Count = 0;
    settingCount = 0;

    // Reset the displayed words
    pNoun1.textContent = "";
    pVerb.textContent = "";
    pAdjective.textContent = "";
    pNoun2.textContent = "";
    pSetting.textContent = "";
    pStory.textContent = "";
}

function displayStudentInfo() {
    pInfo.textContent = "StudentNo : 200544014 || Student name : Aryan Ukani";
}


/* Event Listeners
-------------------------------------------------- */
btnNoun1.addEventListener("click", noun1_on_click);
btnVerb.addEventListener("click", verb_on_click);
btnAdjective.addEventListener("click", adjective_on_click);
btnNoun2.addEventListener("click", noun2_on_click);
btnSetting.addEventListener("click", setting_on_click);
btnPlayback.addEventListener("click", playback_on_click);
btnRandom.addEventListener("click", random_on_click);
btnReset.addEventListener("click", reset_on_click);
btnShowStudentInfo.addEventListener("click", displayStudentInfo);
