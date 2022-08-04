const collection = document.querySelector(".collection");
const formModel = document.querySelector(".from_model");
const divCall = document.querySelector(".call_div");

function addClass() {
    collection.classList.toggle("show")
}

function showFrom() {
    formModel.classList.toggle("show_from")
}

function from() {
    divCall.classList.toggle("div_call")
}