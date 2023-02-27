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

// Während die asynchrone wait-Methode aktiv ist, pausiert
// der Event-Listener und wird erst fortgeführt, nachdem wait
// abgeschlossen ist. In der Zwischenzeit kann es durchaus passieren,
// das sich die Werte von nicht lokalen Variablen verändern, da das
// Programm ganz normal weiterläuft und andere Ereignisse verarbeitet.

refreshButton.addEventListener("click", () => {
  refreshButton.disabled = true;
  
  fetchUsers().then(() => {
    refreshButton.disabled = false;
  });
});

userList.addEventListener("change", async (event) => {
  // console.log(event);
  // console.log(userList.selectedOptions);
  if (userList.selectedOptions.length > 0) {
    const userId = userList.selectedOptions[0].value;
    const user = await fetchUserById(userId);
    showUserDetails(user);
  }
});

async function fetchUserById(userId) {
  const requestUrl = allUsersUrl + "/" + userId;
  // fetch(url) lässt den Browser eine HTTP Anfrage an einen WebService schicken.
  // fetch liefert dem Skript die Response des WebService.
  // In der Response sind jedoch nur die Rohdaten enthalten.
  // Um mit den Rohdaten arbeiten zu können, müssen diese noch umgewandelt werden,
  // z.B. in ein JSON, XML, HTML oder YAML Dokument.
  // Um welche Art von Dokument es sich handelt, ist dem Response-Header Content-Type
  // zu entnehmen.
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
    const response = await fetch(allUsersUrl);
    await wait(1000);
    const users = await response.json();
    populateUserTable(users);
    populateUserList(users);
  } catch (error) {
    console.error(`Failed to fetch user data: ${error}`);
    emptyUserList();
    emptyUserTable();
  }

  // return window
  //   .fetch(allUsersUrl)
  //   .then((response) => wait(1000, response))
  //   .then((response) => response.json())
  //   .then((users) => {
  //     populateUserTable(users);
  //     populateUserList(users);
  //   })
  //   .catch((error) => {
  //     console.error(`Failed to fetch user data: ${error}`);
  //     emptyUserTable();
  //     emptyUserList();
  //   })
}

function emptyUserTable() {
  userTable.querySelector("tbody").innerHTML = "";
}

function emptyUserList() {
  userList.innerHTML = "";
}

function populateUserTable(users) {
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

function populateUserList(users) {
  users.forEach((user) => {
    const option = document.createElement("option");
    option.value = user.id;
    option.innerText = user.name;
    userList.append(option);
  });
}
