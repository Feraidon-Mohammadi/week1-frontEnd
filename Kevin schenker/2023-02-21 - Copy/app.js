import { $, $$ } from "./utils.js";

const allSuchBegriffe = "https://openlibrary.org/search.json?title=suchbegriff&limit=20";
const titleArt = $("#title-art");
const resultTable = $("#result-table");
const suchButton = $("#search-submit-button");
const searchFeld = $("#search-feld");







// keydown write text in input box and  result in out of  the field  in another  field 
const inputbotx = document.getElementById("input-tbox");
input-tbox.addEventListener("keydown", runEvent);
function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(e.target.value); //now it show  what we type in fieldbox but result show in chorome in console 
  // if we want show result in field dann write the field like head of the fied 
  heading.innerText = e.target.value;
}










function wait(milliseconds, result) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(result), milliseconds);
  });
}


function checkForm(){
  let form = document.form[0];
  let selectElement = form.querySelector('input[name="year"]');
  let selectedValue = selectElement.value;
}


$("#suchButton").addEventListener("click", async () => {
  console.log("Vor wait");
  await wait(5000);
  console.log("Nach wait");
});








suchButton.addEventListener("click", () =>{
  suchButton.disabled = true;
  emptytitleArt();
  emptyresultTable();
  fetchtitleArt().then(()=> {
    suchButton.disabled = fasle
  }

  );

});

function encodeURIComponent() {

    suchButton.addEventListener("click", () => {
        suchButton.disabled = true;
        fetchTitleId().then(() => {
          suchButton.disabled = false;
        });
      });

// // ersetzen  function 
// titleArt.forEach(function (titleArt , index) {
//   titleArt.textContent = `${index}: enconded begrif `;
  
// });
// 
};
async function fetchUserById(userId) {
  const requestUrl = allSuchBegriffe + "/" + userId;

  try {
    const response = await fetch(requestUrl);
    const userObject = await response.json();
    return userObject;
  } catch (error) {
    console.error(`Anfrage ist fehlgeschlagen. Ursache: ${error}`);
    return null;
  }
}

async function fetchUsers() {
  try {
    const response = await fetch(allSuchBegriffe);
    await wait(1000);
    const users = await response.json();
    populateUserTable(users);
    populateUserList(users);
  } catch (error) {
    console.error(`Failed to fetch user data: ${error}`);
    emptyresultTable();
    emptyUserTable();
  }
}


function emptytitleArt() {
  userTable.querySelector("tbody").innerHTML = "";
}

function emptyresultTable() {
  userList.innerHTML = "";
}

function populateUserTable(titles) {
  console.log("populate user table");
}


function showUserDetails(user) {
  emptyUserTable();
  const row = document.createElement("tr");
  row.innerHTML += `<td>${user.name}</td>`;
  row.innerHTML += `<td>${user.username}</td>`;
  row.innerHTML += `<td>${user.email}</td>`;
  const address = user.address;
  row.innerHTML += `<td>${address.street}<br>${address.suite}<br>${address.city}</td>`;
  row.innerHTML += `<td>${user.phone}</td>`;
  userTable.querySelector("tbody").append(row);
}

function populateUserList(titles) {
  users.forEach((user) => {
    const option = document.createElement("option");
    option.value = user.id;
    option.innerText = user.name;
    userList.append(option);
  });
}










