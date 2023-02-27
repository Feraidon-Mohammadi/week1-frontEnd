/*
 Mit Hilfe von sogenanten Promises (dt: Versprechen) lassen sich 
 asynchroneFunktionen / Operationen deutlich komfortabler verarbeiten und ggf.
 auch schreiben 
 
 Durch die Verwendung von Promises wird die Hintereinanderausführung und 
 fehlerbehandlungvon  asynchronen Operationen vereinfacht. insbesordere 
 vermeiden Promisese die "pyramid of Doom" . Dadurch ist der Code einfacher
 zu verstehen und zu schreiben .

 Ein Promise repräsentiert grob gesagt eine asynchrone Berechnung , die 
 irgendwann zu einem Ergebnis gelangt oder die mit einem  Fehler abbricht.
 */
// Dise funktion wird eine andere funktion mit einer angänlichen 
// verzögereung aus. Man kan sich als Nachbildung von setTimeout
// vorstellen . Allerdings benutzt dise variante Promises .
 function runDelayed(delay, aFunction) {
    // Diese Funktion gibt lediglich eine neues promise-Objekt zurück.
    return new Promise(( resolve, reject) => {
        window.setTimeout(()=> {
            const result = aFunction();
            resolve(result);
        }, delay);
    });
 }

 /* 
   Bei Verwendung von Promises entfallt der explizite aufruf
   eine Callback-funcktion 
 */
function function1() {
    console.log("function 1 begin to work ... ");
    return runDelayed(2000, () => {
      console.log("Function 1 finished");
      return 42;
    })
} 
  
function function2(result1) {
    console.log("function 2 begin to work ... ");
    return runDelayed(1500, () => {
      console.log("Function 2 finished");
      return 42 + result1;
    });
}

function function3(result2) {
    console.log("function 3 begin to work ... ");
    return runDelayed(1200, () => {
      console.log("Function 3 finished");
      return 42 + result2;
    });
}

function mightFail() {
    console.log("MightFail begins to work...")
    return new Promise(f);

  function f(resolve, reject) {
    if (Math.random() <0.5) {
        resolve(42);
    } else {
        reject("Fehlergeschlagen :-(");
     }
  }
}



/* 
Da funktion1 ein Promise-Objekt zurücklifert . können wir auf diese Promise-Objeckte 
die then-Methde aufrufen und eine Funktion übergeben . die aufgerufen werden soll, wenn
das Promise seinen Wert ermittelt hat.*/
// function1()
//     .then((result1) => function2(result1))
//     .then((result2) => function3(result2))
//     .then((result3) => console.log(`Alle funktionen fertig .Endresultat ist ${result3}`))
//     .catch((error) => console.error(`Während der Abarbeitung ist ein Fehler aufgetreten: ${error}`));




const p = Promise.all([function1(), function2(0), function3(0)]);
p.then((results) =>
console.log("Alle asynchronen Funktionen sind erfolgreich beendet wurden."))
.catch ((error) => console.log("Mindestens eine asynchrone Operation musste abgebrochen werden . "));
