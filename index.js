var choicesArray = [];

window.onload = function() {
    var choiceInput = document.getElementById("choiceInputField");
    choiceInput.onkeypress = function(e) {
        if(e.keyCode == 13) {
            addChoice(choiceInput.value);
            choiceInput.value = "";
        }
    }
}

function addChoice(choice) {
    choicesArray.push(choice);
    var choicesContainer = document.getElementById("choicesContainer");
    var choiceEntry = createChoiceEntry(choice);
    choicesContainer.appendChild(choiceEntry);
}

function updateDom() {
    var choicesContainer = document.getElementById("choicesContainer");
    for (var i = 0; i < choicesArray.length; i++)
    {
        var choiceEntry = createChoiceEntry(choicesArray[i]);
        choicesContainer.appendChild(choiceEntry);
    }
}

function createChoiceEntry(choice) {
    var choiceDiv = document.createElement("div");
    choiceDiv.id = "choiceEntry";
    choiceDiv.innerText = choice;
    return choiceDiv;
}