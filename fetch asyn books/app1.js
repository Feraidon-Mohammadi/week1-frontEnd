import { $, $$ } from "./utils.js";
//wir haben ??? in den url hinzugefugt als  suchbegrif 
const allbooks = "https://openlibrary.org/search.json?title=???&fields=seed,title,edition_count&limit=20";

const title = $("#title-1");
const titleList = $("#title-list");
const resultTable = $("#result-table");

const searchForm = $("#search-form");
const suchfeld = $("#search-field");

// const userTable = $("#result-table");
const suchField = $("#search-submit-button");









async function searchBooks(searchTerm) {
    // here we need an encoded  code that let browser to read our complete  url with 
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    // here in  our url we did replace   ??? or (suchbegrif) code with the new code that we (endcoded) .
    const searchUrl = allbooks.replace("???", encodedSearchTerm);
    // ...
    // here we send our url trough the fetch function and we waiting for  an  answer,
    //  and fetch send a promise to the server and give us back a new promise its need
    //  a short delay untile we geting answer ,
    const response = await fetch(searchUrl);
    // we have infos and  we call the new pormise here result 
    const results = await response.json();
    // we got answer or callback, we have  details but we cant see them .
    return results;
}

    // if we click on out submit button  we see after every click it will be reloading but we need to stop this reload 
    searchForm.addEventListener("submit", async (event) => {
    // then we need to use event prevent.preventDefault .
    event.preventDefault();

    // here we habe details but it waiting for a search text .
    // for example we type ABC in side the input form  but we dont need the input we need value 
    const results = await searchBooks(suchfeld.value);
    // so if we test it biw, with console.log we will see all books and details but in the console.
    // result is  our complete details and docs is  our  first element  
    showBooks(results.docs);
});



// hier we need  to show our list  books 
function showBooks(books) {
    emptyBooksTable();
    // for every book we create a (tr) 
    for (const book of books) {
        // create tr for seed that we  want to show it 
        const row = document.createElement("tr");
        row.dataset.seed = book.seed[0];
        // create td for every title
        row.innerHTML += `<td>${book.title}</td>`;
        // create td for next 
        // row.innerHTML += `<td>${title.Jahr}</td>`; // selbs hinzugefugt 
        row.innerHTML += `<td>jahr</td>`;
        // we need to select  tbody ,where we want to add rows
        resultTable.querySelector("tbody").append(row);
    }
}
    // when we click on the table 
    resultTable.addEventListener("click", async (event) => {
    // event select target when mouse is clicked on the colosest element to tr
    const clickedRow = event.target.closest("tr");
    // we click in table if data seed not undefined
    if (clickedRow.dataset.seed !== undefined) {
        const seed = clickedRow.dataset.seed;
        // we  use it for  url and  we there our id for the books //  i dont know right now how it work
        const bookId = seed.split("/")[2];



        console.log(seed);
        // we did add  seed in the url to show us clicked data seed in tr 
        const url = `https://openlibrary.org${seed}.json`;

        // we send again  our new  url trough the fetch funciton and it give us back details
        const response = await fetch(url);
        // waiting short delay  for answer form fetch function 
        const result = await response.json();
        // we need to select  ourt elements by id in HTML  and we will get elemets publishers  and language form server trough our result .
        $("#publisher").innerText = result.publishers[0];
        $("#language").innerText = result.languages[0].key;
        // we need to select source element for the image of the books and we need to add  bookId  and -M we can use -S or -L for  size of the picture
        $("#cover").src = `https://covers.openlibrary.org/b/olid/${bookId}-M.jpg`;
    }
});

function emptyBooksTable() {
    titleList.innerHTML = "";
}
