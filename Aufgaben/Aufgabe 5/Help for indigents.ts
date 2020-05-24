namespace L05_HelpForIndigents {
    window.addEventListener("load", handleLoad); 
    let form: HTMLFormElement;           


    async function handleLoad(_event: Event): Promise<void> {                  

    console.log("Start");

    generateContent1(data);
    generateContent2(data);
    generateContent3(data);
   
    form = <HTMLFormElement>document.querySelector("form");                          
    form.addEventListener("change", handleChange);                                                          
   
    let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#timeRequired");           
    slider.addEventListener("input", displayAmount);       
    
    let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
    submit.addEventListener("click", sendOrder);

    let response: Response = await fetch("Data.json");
    let offer: string = await response.text();
    let data: Data1 = JSON.parse(offer);
    let data: Data2 = JSON.parse(offer);
    let data: Data3 = JSON.parse(offer);
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

    async function sendOrder(_event: Event): Promise<void> {
        console.log("Send order");
        let formData: FormData = new FormData(form);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("index.html?" + query.toString());
        alert("your order will be processed");
    }
}