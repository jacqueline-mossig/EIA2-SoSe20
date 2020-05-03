/* Hallo Markus :) 
Leider war ich etwas spät mit meiner Konzeption und habe niemanden mehr zum Tauschen gefunden. Deshalb habe ich versucht, mein eigenes Konzept umzusetzten. Mir ist klar, dass das ein bisschen den Sinn der Übung verfehlt, aber ich denke es ist besser als nichts.
Falls ich es dennoch irgendwie nachholen soll, das Konzept eines anderen umzusetzten, dann gib mir Bescheid.
Liebe Grüße Jacqueline :) */

namespace L02_SequenceMemory {
    console.log("Start");
    let sequence: string[] = ["Activity_Diagram", "Array", "Data_Types", "Debugger", "Document_Object_Model", "<header>", "Listener", "Typescript", "While_Loop"];         //Globale Variable sequence anlegen
    let newSequence: string[];                              //Globale Variable newSequence anlegen
    let tries: string : number;                             //Globale Variable tries anlegen

    window.addEventListener("load", handleLoad);            //Load-Listener installieren um handleLoad aufzurufen
}

function handleLoad(_event: Event): void {                  //Funktion handleLoad erstellen
   
    let selectDefined: HTMLElement = <HTMLElement>document.querySelector("select#selectDefined");           //HTML-Element #selectDefined aus HTML-Dokument holen, um den Listener installieren zu können
    selectDefined.addEventListener("click", chosenSequence);                                                //Click-Listener installieren um choosenSequence aufzurufen
   
    let inputOwn: HTMLElement = <HTMLElement>document.querySelector("input#inputOwn");                      //HTML-Element #inputOwn aus HTML-Dokument holen, um den Listener installieren zu können
    inputOwn.addEventListener("click", createSequence);                                                     //Click-Listener installieren um createSequence aufzurufen
    inputOwn.addEventListener("keyboard", createSequence);                                                  //Keyboard-Listener installieren um createSequence aufzurufen

    let inputTries: HTMLElement = <HTMLElement>document.querySelector("input#inputTries");                  //HTML-Element #inputTries aus HTML-Dokument holen, um den Listener installieren zu können
    inputTries.addEventListener("click", chosenTries);                                                      //Click-Listener installieren um choosenTries aufzurufen
    inputTries.addEventListener("keyboard", chosenTries);                                                   //Keyboard-Listener installieren um chooseTries aufzurufen

    let startMemory: HTMLElement = <HTMLElement>document.querySelector("button#startMemory");               //HTML-Element #startGame aus HTML-Dokument holen, um den Listener installieren zu können
    startMemory.addEventListener("click", startGame);                                                       //Click-Listener installieren um startGame aufzurufen

    let memory: HTMLElement = <HTMLElement>document.querySelector("div#memory");                            //HTML-Element #memory aus HTML-Dokument holen, um den Listener installieren zu können
    memory.addEventListener("click", clickCard);                                                            //Click-Listener installieren um clickCard aufzurufen
    
    let mail: HTMLElement = <HTMLElement>document.querySelector("div#mail");                                //HTML-Element #mail aus HTML-Dokument holen, um den Listener istallieren zu können
    mail.addEventListener("keypress", useJoker);                                                            //Keypress-Listener installieren um useJoker aufzurufen                                    
}

function chosenSequence (_event: MouseEvent): void {                                                        //Funktion chosenSequence erstellen

}
