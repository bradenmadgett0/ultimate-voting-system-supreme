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

function addChoiceInput() {
    var choiceLi = document.createElement("li");
    var choiceInput = document.createElement("input");
    choiceLi.setAttribute("class", "choice");
    choiceInput.setAttribute("type", "text");
    choiceInput.setAttribute("placeholder", "Option");
    choiceLi.appendChild(choiceInput);
    document.getElementById("choices").appendChild(choiceLi);
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

function createPoll() {
    var pollWrapper
}

function buildPoll() {

}

var votes = [2,6,3,1,4];

function selected(id) {
  removeSelected();
  document.getElementById(id).className += " selected";
}

function removeSelected() {
  var choices = document.getElementsByClassName("choice");
  for(var i = 0; i < choices.length; i++)
    {
      choices[i].className = "choice";
    }
}

function submit() {
  console.log("Submit clicked!");
  document.getElementById("submitOverlay").className = "show";
  document.getElementById("submitConfirmation").className = "show";
  document.getElementById("checkmarkContainer").className = "show";
  document.getElementById("checkmark").className = "show";
  setTimeout(function(){   
    document.getElementById("submitOverlay").className = "";
    document.getElementById("submitConfirmation").className = "";
    document.getElementById("checkmarkContainer").className = "";
    document.getElementById("checkmark").className = ""; 
  setPercentages()}, 2000);
}

function setPercentages() {
  removeSelected();
  console.log("Set Percentages!");
  var opts = document.getElementsByClassName("percentageOverlay");
  var total = 0;
  for (var i = 0; i < votes.length; i++)
  {
      total += votes[i];
  }
  console.log(total);
  console.log(opts.length);
  for (var f = 0; f < opts.length; f++)
  {
      var percentage = (votes[f]/total)*100;
      opts[f].style.width = String(percentage) + "%";
  }
}