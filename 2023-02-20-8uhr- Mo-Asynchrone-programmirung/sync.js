/*  Bei der synchroen Ausführung von Anweisungen werden die Anweisungen nach einander ausgeführt
    Die zweite anweisung kann erst ausgeführt werden wenn die erste abgearbeitet wurde.
*/
console.log("Hello");
console.log("World");

/* Diese schleife führt  zu einer leichten Verzögerung im Programm.
Während dise schleife zählt. kann die Webseite nicht auf Benutzereingaben reagieren. Deswegen man auch von einer
Blockierenden Operation  */
let i = 0;
for( i = 0; i < 2_000_000_000; ++i){}
console.log(i);

function hello(){
    console.log("Hello");
    
}

function world(){
    console.log("World");

}

/* da  funktionsaufrufe herkömmliche anweisungen sind, blockieren auch diese den Browser bzw .
das program Erst wenn die erste funktion abegearbeitet wurde .
kann die zweite funktion aufgerufen werden . 

Durch die synchrone Ausführung kann das Ergebnis der ersten Funktion an die zweite Funktion übergeben werden*/
hello();
world();