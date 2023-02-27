import { $, $$ } from "./utils.js";

const allUsersUrl = "https://jsonplaceholder.typicode.com/users";
const userList = $("#user-list");
const userTable = $("#user-info-table");
const refreshButton = $("#refresh-button");

function wait(milliseconds, result) {
    return new Promise((resolve) => {
        window.setTimeout(() => resolve(result), milliseconds);
    });
}

// refresh button setting
refreshButton.addEventListener("click", () => {
    refreshButton.disabled = true;
    emptyUserList();
    emptyUserTable();
    fetchUsers().then(() => {
        refreshButton.disabled = false;
    });
});

 async function fetchUsers() {
    try {

 
    const reponse = await fetch(allUserUrl);
    await wait(1000);
    const users = await response.json();
    populateUserTable(users);
    populateUserList(users);
   } catch (error) {
    console.error(`Failed to fetch user data: ${error}`);
    emptyUserList();
    emptyUserTable();
   }
}


    // function fetchUsers() {
    // return window
    //     .fetch(allUsersUrl)
    //     .then((response) => wait(1000, response))
    //     .then((Response) => Response.json())
    //     .then((users) => {
    //         // fill the form
    //         populateUserTable(users);
    //         populateUserList(users);
    //     })
    //     .catch((error) => {
    //         console.error(`Failed to fetch user data: ${error}`);
    //         emptyUserTable();
    //         emptyUserList();
    //     });



function emptyUserTable() {
    userTable.querySelector("tbody").innerHTML = "";
}

function emptyUserList() {
    userList.innerHTML = "";
}

function populateUserTable(users) {
    console.log("populate user table");
}

function populateUserList(users) {
    console.log("populate user list");
}
