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
    }

    // {
    //     word: "" ,
    //     definition: ""
    // }
]
//invoke function
getQuest();

// get random word from wordBank

function getQuest(){
    let ranNum = Math.floor(Math.random() * wordBank.length);
    document.getElementById("question").innerHTML = wordBank[ranNum].definition;
}

