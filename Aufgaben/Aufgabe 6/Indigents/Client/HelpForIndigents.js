"use strict";
var L05_HelpForIndigents;
(function (L05_HelpForIndigents) {
    window.addEventListener("load", handleLoad);
    let form;
    //let url: string = "index.html";   
    let url = "http://localhost:5001";
    async function handleLoad(_event) {
        console.log("Start");
        L05_HelpForIndigents.generateContent1(data);
        L05_HelpForIndigents.generateContent2(data);
        L05_HelpForIndigents.generateContent3(data);
        form = document.querySelector("form");
        form.addEventListener("change", handleChange);
        let slider = document.querySelector("input#timeRequired");
        slider.addEventListener("input", displayAmount);
        let submit = document.querySelector("button[type=button]");
        submit.addEventListener("click", sendOrder);
        let response = await fetch("Data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        let data = JSON.parse(offer);
        let data = JSON.parse(offer);
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
    async function sendOrder(_event) {
        console.log("Send order");
        let formData = new FormData(form);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let response = await fetch("url" + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
    }
})(L05_HelpForIndigents || (L05_HelpForIndigents = {}));
//# sourceMappingURL=HelpForIndigents.js.map