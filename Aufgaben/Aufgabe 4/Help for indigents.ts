namespace L04_HelpForIndigents {
    window.addEventListener("load", handleLoad);            
}

function handleLoad(_event: Event): void {                  

    console.log("Start");

    generateContent1(data);
    generateContent2(data);
    generateContent3(data);
   
    let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");                          
    form.addEventListener("change", handleChange);                                                          
   
    let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#timeRequired");           
    slider.addEventListener("input", displayAmount);                                                        
}         

function displayOrder(_event: Event): void {
    let order: HTMLDivElement = <HTMLDivElement> document.querySelector("div#order");
    order.innerHTML += item.name  + "      " + price + " € ";
}


function handleChange(_event: Event): void {
        //console.log(_event);
        let formData: FormData = new FormData(document.forms[0]);
        //console.log(formData);
        for (let entry of formData) {
        //console.log(entry);
        let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "'");
        //console.log(item);
        let price: number = Number(item.getAttribute("price"));
        //console.log(price);
    }
}

function displayAmount(_event: Event): void {
    let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
    let timeRequired: string = (<HTMLInputElement>_event.target).value;
    progress.value = parseFloat(timeRequired);  //von rechts auf links zuweisen
}
