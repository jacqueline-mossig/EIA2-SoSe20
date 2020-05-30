"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url"); //verarbeitet url weiter
var L06_HelpForIndigents;
(function (L06_HelpForIndigents) {
    let server = Http.createServer(); //Variable erstellen für den Server (Server ist hier ein Teil einer Software)
    //console.log(server);
    let port = process.env.PORT; //Port als Variable erschaffen und Typen zuweisen
    if (port == undefined) //wenn Port nicht vorhanden ist...
        port = 5001; //...dann nehme 5001
    console.log("Server starting on port:" + port);
    server.listen(); //Server soll auf Port horchen
    server.addListener("request", handleRequest); //Wenn er eine request erhält, ruft er handleRequest auf
    function handleRequest() {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html; charset-utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //console.log(_request.url);                                             //url-Teil anzeigen lassen
        if (_request.url) { //Prüfen, ob es überhaupt einen url gibt
            let url = Url.parse(_request.url, true); //Url übersetzten lassen und zu einem Assoziativen Array machen
            //console.log(url.query);
            for (let key in url.query) { //Schlüssel-Werte-Paare erstellen... 
                //console.log(key + ":" + url.query[key]);                //...und ausgeben lassen
                _response.write(key + ":" + url.query[key] + "<br/>"); //Etwas in die vorgegebene Antwort schreiben 
            }
            let jsonString = JSON.stringify(url.query); //Nimmt Assoziatives Array und wandelt es in Zeichenkette um
            _response.write(jsonString); //Etwas in die vorgegebene Antowort schreiben
        }
        _response.write("This is my responce"); //Etwas in die vorgegebene Antwort schreiben 
        _response.end(); //Antwort beenden, sonst verschickt der Server die Anfrage nicht
    }
})(L06_HelpForIndigents = exports.L06_HelpForIndigents || (exports.L06_HelpForIndigents = {}));
//# sourceMappingURL=server.js.map