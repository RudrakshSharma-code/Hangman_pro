window.onload = function scripts() {

    const MAX = 26;
    const NUM = 65;
    let user;
    let answer;
    let remainingLetter;
    let score = 0;
    let count = 7;
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
        },
        {
            word: "TATTOO",
            definition: "A form of body modification where a design is made by inserting ink"
        },
        {
            word: "ELECTRICITY",
            definition: "Is the set of physical phenomena associated with the presence and motion of electric charge"
        },
        {
            word: "AMELIORATE",
            definition: "to make better something that was bad or not good enough"
        },
        {
            word: "IMMUNOCOMPROMISED",
            definition: "Having an impaired immune system"
        }
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
        remainingLetter = answer.length;
        console.log(remainingLetter);
    }

/*----------------------------------------------------Button Object Constructor------------------------------*/
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
                    remainingLetter--;
                    console.log(remainingLetter);
                    scoreUp();
                    underscore[i] = this.value;
                    document.getElementById("answer").innerHTML = underscore.join(" ");
                } 
            }
            let wrong = true;
            for (let i = 0; i <= answer.length; i++){
                if (this.value == answer.charAt(i)) {
                    wrong = false;
                    break;
                } 
            }
            if(wrong == true){
                count--;
                scoreDown();
                wrongGuess();
            }
            
        }
        this.btn.onclick = this.disableButton;
        document.getElementById("buttons").appendChild(this.btn);
    }

/*-------------------------------------------Generate Buttons---------------------------------------------*/
    function generateButtons() {
        for (let i = 0; i < MAX; i++) {
            let ch = String.fromCharCode(NUM + i);
            let fs = 24 + "px"; //font size
            arrayButtons.push(new Button(ch, fs));
        }
    }

/*--------------------------------------------Removes alphabets.-------------------------------------------*/
    function createUnderscore() {;
        for (let i = 0; i < answer.length; i++) {
            underscore.push("_");
        }
        document.getElementById("answer").innerHTML = underscore.join(" ");
    }
    
/*----------------------------------Decreases Score---------------------------------------------------*/
    function scoreUp() {
        score += 1;
        document.getElementById("score").innerHTML = "Score: " + score;
    }
/*----------------------------------Increases Score---------------------------------------------------*/
    function scoreDown() {
        if (score > 0) {
            score = score - 1;
        } else {
            score = 0;
        }
        document.getElementById("score").innerHTML = "Score: " + score;
    }

/*----------------------------------When user guesses wrong word-------------------------------------*/
    function wrongGuess() {
        if (count == 6){
            document.getElementById("hangman").src = "images/hang2.png";
        } else if (count == 5){
            document.getElementById("hangman").src = "images/hang3.png";
        } else if (count == 4){
            document.getElementById("hangman").src = "images/hang4.png";
        } else if (count == 3){
            document.getElementById("hangman").src = "images/hang5.png";
        } else if (count == 2){
            document.getElementById("hangman").src = "images/hang6.png";
        } else if (count == 1){
            document.getElementById("hangman").src = "images/hang7.png";
        } else if (count == 0){
            document.getElementById("hangman").src = "images/hang8.png";
        }
    }
/*------------------------------------Wins The Game-------------------------------------------------*/
    let interval = this.setInterval(function() {
            
        if (remainingLetter == 0) {
            user = prompt("Please enter your name.");
            alert(user+", your score is " + score);
            clearInterval(interval);
        }
    }, 100);
/*-------------------------------------Restarts the game---------------------------------------------*/
    function restart() {
        window.location.reload();
    }
}