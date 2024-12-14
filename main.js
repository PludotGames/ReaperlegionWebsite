
//Getting elements out of HTML file
const GO_TO_BUTTON = document.getElementById("GoToButton");
const HIDDEN_BUTTON_LIST = document.getElementById("HiddenButtonsList")
//EventListeners
GO_TO_BUTTON.addEventListener('click',function(){
    GO_TO_BUTTON.hidden = true;
    HIDDEN_BUTTON_LIST.hidden = false;
});

//functions
function ResetButton(){
    HIDDEN_BUTTON_LIST.hidden = true;
    GO_TO_BUTTON.hidden = false;
}