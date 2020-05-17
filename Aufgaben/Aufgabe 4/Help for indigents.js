"use strict";
var L04_HelpForIndigents;
(function (L04_HelpForIndigents) {
    window.addEventListener("load", handleLoad);
})(L04_HelpForIndigents || (L04_HelpForIndigents = {}));
function handleLoad(_event) {
    console.log("Start");
    generateContent1(data);
    generateContent2(data);
    generateContent3(data);
    let form = document.querySelector("div#form");
    form.addEventListener("change", handleChange);
    let slider = document.querySelector("input#timeRequired");
    slider.addEventListener("input", displayAmount);
}
function displayOrder(_event) {
    let order = document.querySelector("div#order");
    order.innerHTML += item.name + "      " + price + " € ";
}
function handleChange(_event) {
    //console.log(_event);
    let formData = new FormData(document.forms[0]);
    //console.log(formData);
    for (let entry of formData) {
        //console.log(entry);
        let item = document.querySelector("[value='" + entry[1] + "'");
        //console.log(item);
        let price = Number(item.getAttribute("price"));
        //console.log(price);
    }
}
function displayAmount(_event) {
    let progress = document.querySelector("progress");
    let timeRequired = _event.target.value;
    progress.value = parseFloat(timeRequired); //von rechts auf links zuweisen
}
//# sourceMappingURL=Help for indigents.js.map