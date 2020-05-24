namespace L05_HelpForIndigents {
    export interface Item {
        name: string;
        price: number;
    }

    export interface Data1 {
        [category1: string]: Item[];
    }

    export interface Data2 {
        [category2: string]: Item[];
    }

    export interface Data3 {
        [category3: string]: Item[];
    }

    //let data = [Data1, Data2, Data3];

    export function generateContent1(_data: Data1) {
         //console.log(_data);

        for(let category1 in _data) {
            //console.log(category1);
            let items: Item[] = _data[category1];

            let group1: HTMLElement | null = null;
            switch (category1) {
                case "article":
                    group1 = createSelect1(items);
                    break;
                case "amount":
                    group1 = createSingle1(items);
                    break;
                case "shop":
                    group1 = createMultiple1(items, category1);
                    break;
                default:
                    break;
            }
            
            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category1);
            if (fieldset && group1)
                fieldset.appendChild(group1);
    }
}

    export function generateContent2(_data: Data2) {
        //console.log(_data);

        for(let category2 in _data) {
        //console.log(category2);
        let items: Item[] = _data[category2];

        let group2: HTMLElement | null = null;
        switch (category2) {
            case "task1":
               group2 = createSelect2(items);
               break;
            default:
               break;
       }
       
        let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category2);
        if (fieldset && group2)
                fieldset.appendChild(group2);
}
}

    export function generateContent3(_data: Data3) {
        //console.log(_data);

        for(let category3 in _data) {
        //console.log(category3);
        let items: Item[] = _data[category3];

        let group3: HTMLElement | null = null;
        switch (category3) {
            case "task2":
                group3 = createSingle3(items);
                break;
            case "method":
                group3 = createSingle3(items);
                break;
            default:
            break;
   }
   
        let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category3);
        if (fieldset && group3)
            fieldset.appendChild(group3);
}
}



    function createSelect1(_items: Item[], _category1: string): HTMLElement | null {
        let group1: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let select: HTMLInputElement = document.createElement("input");
            select.type = "select";
            select.setAttribute("price", item.price.toFixed(2));
            select.value = item.name;
            select.name = _category1;
            select.id = item.name;

            group1.appendChild(select);
        }
        return group1;
    }

    function createSingle1(_items: Item[], _category1: string): HTMLElement | null {
        let group1: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let radio: HTMLInputElement = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute("price", item.price.toFixed(2));
            radio.value = item.name;
            radio.name = _category1;
            radio.id = item.name;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name; 
            label.htmlFor = item.name;

            group1.appendChild(radio);
            group1.appendChild(label);
        }
        return group1;
    }

    function createMultiple1(_items: Item[], _category1: string): HTMLElement | null {
        let group1: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category1;
            checkbox.id = item.name;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name; 
            label.htmlFor = item.name;

            group1.appendChild(checkbox);
            group1.appendChild(label);
        }
        return group1;
    }
}



function createSelect2(_items: Item[], _category2: string): HTMLElement | null {
    let group2: HTMLDivElement = document.createElement("div");
    for (let item of _items) {
        let select: HTMLInputElement = document.createElement("input");
        select.type = "select";
        select.setAttribute("price", item.price.toFixed(2));
        select.value = item.name;
        select.name = _category2;
        select.id = item.name;

        group2.appendChild(select);
    }
    return group2;
}



function createSingle3(_items: Item[], _category3: string): HTMLElement | null {
    let group3: HTMLDivElement = document.createElement("div");
    for (let item of _items) {
        let radio: HTMLInputElement = document.createElement("input");
        radio.type = "radio";
        radio.setAttribute("price", item.price.toFixed(2));
        radio.value = item.name;
        radio.name = _category3;
        radio.id = item.name;

        let label: HTMLLabelElement = document.createElement("label");
        label.textContent = item.name; 
        label.htmlFor = item.name;

        group3.appendChild(radio);
        group3.appendChild(label);
    }
    return group3;
}