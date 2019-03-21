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
    var choiceObj = initializeChoiceEntry(choice);
    choicesArray.push(choiceObj);
    var choicesContainer = document.getElementById("choicesContainer");
    var choiceEntry = createChoiceEntry(choiceObj);
    choicesContainer.appendChild(choiceEntry);
}

function initializeChoiceEntry(choice) {
    return {choiceName: choice, voteCount: 0};
}

function createChoiceEntry(choice) {
    var choiceDiv = document.createElement("div");
    var choiceButton = document.createElement("button");
    choiceDiv.id = "choiceEntry";
    choiceButton.id = choicesArray.length - 1;
    choiceButton.className = "choiceButton"
    choiceButton.innerHTML = choice.choiceName + " " + choice.voteCount;
    choiceButton.addEventListener("click", buttonClicked);
    choiceDiv.appendChild(choiceButton);
    return choiceDiv;
}

function updateVoteCount(choiceNumber) {
    var choiceInt = parseInt(choiceNumber, 10);
    choicesArray[parseInt(choiceNumber, 10)].voteCount++;
}

function updateChoiceButton(buttonId) {
    var currentButton = document.getElementById(buttonId);
    var newButtonInfo = currentButton.innerHTML.slice(0, currentButton.innerHTML.indexOf(" "));
    currentButton.innerHTML = newButtonInfo + " " + choicesArray[parseInt(buttonId, 10)].voteCount;
}

function buttonClicked(event){
    console.log("Button " + this.id + " clicked");
    updateVoteCount(this.id);
    updateChoiceButton(this.id);
}