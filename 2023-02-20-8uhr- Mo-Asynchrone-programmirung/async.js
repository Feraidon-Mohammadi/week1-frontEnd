import { $ } from "./utils.js";

/* Hiermit teilen wir den Broweser mit . dass er nach  frphestens 2 sekunden eine
 funktion ausführen soll, Der Browser wird den Funktionsaufruf
 als task an die Task-queue nach ca. 2swkunden anhängen . 
 Der main-thread wird diese task dann irgendwann abarbeiten und 
 zwar innerhalb seines Event-loops. */
window.setTimeout(() => {
    console.log("Hello, World");
}, 2000);
console.log("setTimeout ist fertig");




/* Ereignisbehandlungsroutinen (Event handler) werden stets 
asynchron ausgeführt . das bedeutet , dass der Browser mit der 
Ausführung des Skriptes fortfährt ud nicht blockiert.

wenn der nutzer irgendwann auf den Button klickt fügt der Browser einen 
 neuen Task  zur task queue hinzu .
 Der Main Thread wird disen Task dann irgendwann abarbeiten. 
*/

$("#click-me-button").addEventListener("click", () => {
    console.log("button was clicked");
});


/* Eine Hintereinanderausführung von asynchronen Operationen kann schnell 
zu einem phänomen namens pyramid of Doom führen . Darunter versteht man einee umfangreiche 
von Callback-funktionen


Callback-Funktion dienen zur Synchronisierung von asynchronen Opeationen 
Wenn eine Asynchrone Operation endet, ruft sie eine Callback-Funcktion  auf, 
wodurch das Hauptprogream  über die beendingung informiert wird und weiter Operationen starten kann.*/
// setTimeout(() => {
//     console.log("JavaScript");
//       setTimeout(() => {
//         console.log("is");
//           setTimeout(() => {
//             console.log("very");
//               setTimeout(()=> {
//                 console.log("awesome!")
//                   setTimeout(()=> {
//                     console.log("feri");
//                   },1000);
//             },1000)
//           },1000)
//     },1000);
// },1000);






/* ***************************************************************************************************
selbst gefunden mit setInterval

setTimeout(() => {
    console.log("JavaScript");
      setTimeout(() => {
        console.log("is");
          setTimeout(() => {
            console.log("very");
              setTimeout(()=> {
                console.log("awesome!")
                  ######setInterval(()=> {#######
                    console.log("feri");
                  },1000);
            },1000)
          },1000)
    },1000);
},1000);  

***************************************************************************************************/









/* Annahme: alle funktionen sind  asynchron , d.h  sind nich blockierend und geben erst nach einer gewissen Dauer ihr Ergebnis zurück .

function1 -> result1
function2(result1) -> result2
function3(result2) -> result3
*/

// Function1 ruft die Callback funktion mit ihrem  ergebnis auf . 
// sobald sie fertig ist.
function function1(callback) {
    console.log("function 1 begins to work ....");
    /* Führe eine sehr aufwändige und ggf. langdauernde durch.
    wir simulieren die langandauernde  berechnung durch einen Timeout.  */
    setTimeout(() => {
        console.log(" Function 1 finished");
        const result = 42;
        callback(result);

    }, 2000);
}


function function2(result1, callback) {
    console.log("function 2 begins to work ....");
    setTimeout(() => {
        console.log(" Function 2 finished");
        const result = result1 + 42;
        callback(result);

    }, 500);
}


function function3(result2, callback) {
    console.log("function 3 begins to work ....");
    setTimeout(() => {
        console.log(" Function 3 finished");
        const result =result2 + 42;
        callback(result);
    }, 200);
}

// Um die asynchronen Operationen function 1, ....function3 hintereinander 
// auszuführen . verwenden wir Callback-funktionen.
// function1((result1) => {
//     function2(result1, (result2) => {
//         function3(result2, (result3) => {
//             console.log("all functions finished . End result is " + result3);
//         });
//     });
// });


function1(()=> {});
function2(0, ()=> {});
function3(0, ()=> {});




