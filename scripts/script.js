window.onload = function scripts() {

    const MAX = 26;
    const NUM = 65;
    let answer;
    let score = 0;
    let arrayButtons = [];
    let hiddenWord = [];
    let underscore = [];
    let wordBank = [{
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
    function getQuest() {
        let ranNum = Math.floor(Math.random() * wordBank.length);
        document.getElementById("question").innerHTML = wordBank[ranNum].definition;
        answer = wordBank[ranNum].word;
    }

    //create buttons
    function Button(letter, font) {
        this.btn = document.createElement("button");
        this.btn.style.fontSize = font;
        this.btn.value = letter;
        this.btn.innerHTML = letter;

        //Do not use this.btn in here, just use this. _____
        this.disableButton = function () {
            this.style.visibility = "hidden";
            for (let i = 0; i <= answer.length; i++) {
                if (this.value == answer.charAt(i)) {
                    underscore[i] = this.value;
                    document.getElementById("answer").innerHTML = underscore.join(" ");
                } else {
                    wrongGuess(); 
                }
            }
        }
        this.btn.onclick = this.disableButton;
        document.body.appendChild(this.btn);
    }

    //generate creating buttons
    function generateButtons() {
        for (let i = 0; i < MAX; i++) {
            let ch = String.fromCharCode(NUM + i);
            let fs = 24 + "px"; //font size
            arrayButtons.push(new Button(ch, fs));
        }
    }

    //create underscore
    function createUnderscore() {
        // let underscore = [];
        for (let i = 0; i < answer.length; i++) {
            underscore.push("_");
        }
        document.getElementById("answer").innerHTML = underscore.join(" ");
    }

    //split the word
    function takeLetter() {
        for (let i = 0; i < answer.length; i++) {
            hiddenWord.push(answer.charAt(i));
        }
    }

    //check correct
    function checkLetter(letter) {
        for (let i = 0; i < hiddenWord.length; i++) {
            if (hiddenWord[i] == letter) {
                remainingLetter--;
                score++;
                underScore[i] = hiddenWord[i];
                document.getElementByID("" + letter).style.visibility = "hidden";
            } else {
                if (score > 0) {
                    score--;
                }
                document.getElementByID("" + letter).style.visibility = "hidden";
            }
        }
    }

    //When user guesses a wrong letter
    function wrongGuess() {
        
    }
    
    // restart the game
    function restart() {
        window.location.reload();
    }

}