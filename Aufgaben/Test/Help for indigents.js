"use strict";
var L02_HelpForIndigents;
(function (L02_HelpForIndigents) {
    window.addEventListener("load", handleLoad); //Load-Listener installieren um handleLoad aufzurufen
})(L02_HelpForIndigents || (L02_HelpForIndigents = {}));
function handleLoad(_event) {
    console.log("Start");
    let form = document.querySelector("div#form"); //HTML-Element #selectDefined aus HTML-Dokument holen, um den Listener installieren zu können
    form.addEventListener("change", handleChange); //Click-Listener installieren um choosenSequence aufzurufen
    let slider = document.querySelector("input#timeRequired"); //HTML-Element #inputOwn aus HTML-Dokument holen, um den Listener installieren zu können
    slider.addEventListener("input", displayAmount); //Click-Listener installieren um createSequence aufzurufen  
    let choose = document.querySelector("fieldset#choose");
    choose.addEventListener("click", showInput);
    let okay = document.querySelector("button#okay");
    okay.addEventListener("click", showInput);
}
function displayOrder(_event) {
    let orderBuying = document.querySelector("div#orderBuying");
    orderBuying.innerHTML = "";
}
/*unction showInput(): void {
    let buying: HTMLInputElement = <HTMLInputElement>document.getElementById("Buying");
    let housework: HTMLInputElement = <HTMLInputElement>document.getElementById("housework");
    let banking: HTMLInputElement = <HTMLInputElement>document.getElementById("banking");

    if (buying.checked == true) {
        buying.disabled = true;
        housework.disabled = false;
        banking.disabled = false;
    }
    else if (housework.checked == true) {
        buying.disabled = false;
        housework.disabled = true;
        banking.disabled = true;
    }
    else if (banking.checked == true) {
        buying.disabled = true;
        housework.disabled = true;
        banking.disabled = false;
    }
}
*/
function handleChange(_event) {
    let order = document.querySelector("div#order");
    order.innerHTML = "";
    let formData = new FormData(document.forms[0]); // weißt der variablen formData alle fieldsets zu
    for (let entry of formData) {
        console.log(entry);
        let item = document.querySelector("[value='" + entry[1] + "']");
        let price = Number(item.getAttribute("price"));
        if (price == "0") {
            order.innerHTML += entry[0] + ":" + " " + entry[1] + " " + " " + "<br>";
        }
        else
            order.innerHTML += entry[0] + ":" + " " + entry[1] + " " + price + " €" + " " + "<br>";
    }
    /*  console.log(_event);
        //let formData: FormData = new FormData(document.forms[0]);
        //console.log(formData);
        for (let entry of formData) {
        //console.log(entry);
        let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "'");
        //console.log(item);
        let price: number = Number(item.getAttribute("price"));
        //console.log(price);

        let orderBuying: HTMLDivElement = <HTMLDivElement> document.querySelector("div#orderBuying");
        orderBuying.innerHTML += item.name  + " " + price + "  € ";
    */ 
}
function displayAmount(_event) {
    let progress = document.querySelector("progress");
    let timeRequired = _event.target.value;
    progress.value = parseFloat(timeRequired); //von rechts auf links zuweisen
}
//# sourceMappingURL=Help for indigents.js.map