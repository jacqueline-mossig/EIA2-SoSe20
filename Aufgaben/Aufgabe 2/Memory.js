"use strict";
/* Hallo Markus :)
Leider war ich etwas spät mit meiner Konzeption und habe niemanden mehr zum Tauschen gefunden. Deshalb habe ich versucht, mein eigenes Konzept umzusetzten. Mir ist klar, dass das ein bisschen den Sinn der Übung verfehlt, aber ich denke es ist besser als nichts.
Falls ich es dennoch irgendwie nachholen soll, das Konzept eines anderen umzusetzten, dann gib mir Bescheid.
Liebe Grüße Jacqueline :) */
var L02_SequenceMemory;
(function (L02_SequenceMemory) {
    console.log("Start");
    let sequence = ["Activity_Diagram", "Array", "Data_Types", "Debugger", "Document_Object_Model", "<header>", "Listener", "Typescript", "While_Loop"]; //Globale Variable sequence anlegen
    let newSequence; //Globale Variable newSequence anlegen
    let tries, number; //Globale Variable tries anlegen
    window.addEventListener("load", handleLoad); //Load-Listener installieren um handleLoad aufzurufen
})(L02_SequenceMemory || (L02_SequenceMemory = {}));
function handleLoad(_event) {
    let selectDefined = document.querySelector("select#selectDefined"); //HTML-Element #selectDefined aus HTML-Dokument holen, um den Listener installieren zu können
    selectDefined.addEventListener("click", chosenSequence); //Click-Listener installieren um choosenSequence aufzurufen
    let inputOwn = document.querySelector("input#inputOwn"); //HTML-Element #inputOwn aus HTML-Dokument holen, um den Listener installieren zu können
    inputOwn.addEventListener("click", createSequence); //Click-Listener installieren um createSequence aufzurufen
    inputOwn.addEventListener("keyboard", createSequence); //Keyboard-Listener installieren um createSequence aufzurufen
    let inputTries = document.querySelector("input#inputTries"); //HTML-Element #inputTries aus HTML-Dokument holen, um den Listener installieren zu können
    inputTries.addEventListener("click", chosenTries); //Click-Listener installieren um choosenTries aufzurufen
    inputTries.addEventListener("keyboard", chosenTries); //Keyboard-Listener installieren um chooseTries aufzurufen
    let startMemory = document.querySelector("button#startMemory"); //HTML-Element #startGame aus HTML-Dokument holen, um den Listener installieren zu können
    startMemory.addEventListener("click", startGame); //Click-Listener installieren um startGame aufzurufen
    let memory = document.querySelector("div#memory"); //HTML-Element #memory aus HTML-Dokument holen, um den Listener installieren zu können
    memory.addEventListener("click", clickCard); //Click-Listener installieren um clickCard aufzurufen
    let mail = document.querySelector("div#mail"); //HTML-Element #mail aus HTML-Dokument holen, um den Listener istallieren zu können
    mail.addEventListener("keypress", useJoker); //Keypress-Listener installieren um useJoker aufzurufen                                    
}
function chosenSequence(_event) {
}
//# sourceMappingURL=Memory.js.map