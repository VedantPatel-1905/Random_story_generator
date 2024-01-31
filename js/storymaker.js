// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const nounBtn1 = document.querySelector("#noun1");
const verbBtn = document.querySelector("#verb");
const adjectiveBtn = document.querySelector("#adjective");
const nounBtn2 = document.querySelector("#noun2");
const settingBtn = document.querySelector("#setting");
const resetBtn = document.querySelector("#reset");

// Constants for p tag to display query selectors
const nounPara1 = document.querySelector("#choosenNoun1");
const verbPara = document.querySelector("#choosenVerb");
const adjectivePara = document.querySelector("#choosenAdjective");
const nounPara2 = document.querySelector("#choosenNoun2");
const settingPara = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags
const playback = document.querySelector("#playback");
const random = document.querySelector("#random");
const storyPara = document.querySelector("#story");
const body = document.querySelector("body");

// Variables for pre-defined arrays
var nounArray1 = ["The turkey","Mom","Dad","The dog","My teacher","The elephant"];
var verbArray = ["sat on","ate","danced with","saw","doesn't like","kissed"];
var adjectiveArray = ["a funny","a scary","a goofy","a slimy","a barking","a fat"];
var nounArray2 = ["bug","frog","cow","fish","monkey","goat","worm"];
var settingArray = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];

// Variables for count to grab array elements
var noun1;
var verb;
var adjective;
var noun2;
var setting;


/* Functions
-------------------------------------------------- */
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function noun1_on_click() {
    
    // variable to get array element and displaying it
    noun1 = randomValueFromArray(nounArray1);
    nounPara1.textContent = noun1;
    body.style = "background: #eda9f2;";
    
}

function verb_on_click() {
    
    verb = randomValueFromArray(verbArray);
    verbPara.textContent = verb;
    body.style = "background: #7bdee3;";
}

function adjective_on_click() {
    
    adjective = randomValueFromArray(adjectiveArray);
    adjectivePara.textContent = adjective;
    body.style = "background: #8de991;;";
}

function noun2_on_click() {
    noun2 = randomValueFromArray(nounArray2);
    nounPara2.textContent = noun2;
    body.style = "background: #e5ed8f;";
    
}

function setting_on_click() {
    setting = randomValueFromArray(settingArray);
    settingPara.textContent = setting;
    body.style = "background: #b98fec;";
    
}

// concatenate the user story and display
function playback_on_click() {
    
    storyPara.textContent = noun1+ " " + verb+ " " + adjective+ " " + noun2+ " " + setting;
    
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    setting = randomValueFromArray(settingArray);
    noun2 = randomValueFromArray(nounArray2);
    noun1 = randomValueFromArray(nounArray1);
    verb = randomValueFromArray(verbArray);
    adjective = randomValueFromArray(adjectiveArray);
    
    storyPara.textContent = noun1+ " " + verb+ " " + adjective+ " " + noun2+ " " + setting;
}

function reset_on_click()
{
    body.style = "background: #ffffff;";
    storyPara.textContent = "";
    noun1 = noun2 = verb = adjective = setting = "";
    settingPara.textContent = setting;
    nounPara2.textContent = noun2;
    adjectivePara.textContent = adjective;
    verbPara.textContent = verb;
    nounPara1.textContent = noun1;
}

/* Event Listeners
-------------------------------------------------- */
nounBtn1.addEventListener("click",noun1_on_click);
verbBtn.addEventListener("click",verb_on_click);
adjectiveBtn.addEventListener("click",adjective_on_click);
nounBtn2.addEventListener("click",noun2_on_click);
settingBtn.addEventListener("click",setting_on_click);
playback.addEventListener("click",playback_on_click)
random.addEventListener("click",random_on_click)
resetBtn.addEventListener("click",reset_on_click)