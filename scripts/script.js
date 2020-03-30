window.onload = function scripts() {

const MAX = 26;
const NUM = 65;
let answer;
let arrayButtons = [];
let wordBank =[
    {
        word: "ENTITY",
        definition: "A person, place, thing, or event for which data is collected and maintained"
    },

    {
        word: "SCHEMA",
        definition: "Descriptions of all fields, tables and relationship"
    },

    {
        word: "FIELD",
        definition: "(An attribute) Single characteristic or fact about an entity"
    },

    {
        word: "SCALABILITY",
        definition: "System can be modified, or downsized"
    },

    {
        word: "LET",
        definition: "A beautiful variable in Javascript"
    },

    {
        word: "COMMITTEE",
        definition: "A group of people appointed for a specific function, typically consisting of members of a larger group."
    }
    // {
    //     word: "" ,
    //     definition: ""
    // }
];

//invoke function

getQuest();
generateButtons();
createUnderscore();
document.getElementById("rs").onclick = restart;

// get random word from wordBank

function getQuest(){
    let ranNum = Math.floor(Math.random() * wordBank.length);
    document.getElementById("question").innerHTML = wordBank[ranNum].definition;
    answer = wordBank[ranNum].word;
}

//create buttons
function Button(letter){
    this.btn = document.createElement("button");
    this.btn.style.width = 2 + "%";
    this.btn.value = letter;
    this.btn.innerHTML = letter;
    this.btn.onclick = this.disableButton;
    document.body.appendChild(this.btn);

    //disable button after click (need to fix this)
    this.disableButton = function(){
        console.log(this.btn.value);
        this.btn.style.visibility = "hidden";
    }
}

//generate creating buttons
function generateButtons(){
    for(let i=0; i < MAX; i++ ){
        let ch = String.fromCharCode(NUM + i);
        arrayButtons.push(new Button(ch));
    }
}

//create underscore
function createUnderscore(){
    let underscore = [];
    for (let i = 0; i < answer.length; i++){
        underscore.push("_");
    }
    document.getElementById("answer").innerHTML = underscore.join(" ");
}

// restart the game
function restart(){
    window.location.reload();
}

}