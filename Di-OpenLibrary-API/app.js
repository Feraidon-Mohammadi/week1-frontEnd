import { $, $$ } from "./app.js";

const allUsersUrl = "https://openlibrary.org/search.json?title=suchbegriff&limit=20";
const titleId = $("#title-id");
const userTable = $("#result-table");
const sucheField = $("#search-submit-button");






/**
 * @param $ {titleId} das ist ein id 
 * 
 * 
 * 
 * encod function für später
 * encodeURIComponent("feri13455")
 * */

function encodeURIComponent("suchField") {

    sucheField.addEventListener("click", () => {
        suchButton.disabled = true;
        fetchTitleId().then(() => {
          suchButton.disabled = false;
        });
      });

// ersetzen  function 
titleId.forEach(function (titleId , index) {
  titleId.textContent = `${index}: econded begrif `;
  
});
};

