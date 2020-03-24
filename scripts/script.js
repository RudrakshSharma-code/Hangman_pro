const MAX = 26;
const NUM = 65;
let question;
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
    }
    // {
    //     word: "" ,
    //     definition: ""
    // }
];

//invoke function
getQuest();
generateButtons();

// get random word from wordBank

function getQuest(){
    let ranNum = Math.floor(Math.random() * wordBank.length);
    document.getElementById("question").innerHTML = wordBank[ranNum].definition;
    question = wordBank[ranNum].word; 
}

//create buttons
function createButton(a){
    var but = document.createElement("button");
    let ch = String.fromCharCode(a);
    
    but.innerHTML= ch;
    but.value = ch;
    document.body.appendChild(but);
}

//generate creating buttons
function generateButtons(){
    for(let i=0; i < MAX; i++ ){
        createButton(NUM+i);
    }
}

