const header = document.createElement("h1");
const body = document.getElementsByTagName("body")[0];
const form = document.getElementById("form");
const logoutButton = document.createElement("button");
logoutButton.innerText = "Logout";
logoutButton.onclick = logout;
const userError = document.createElement("p");
userError.innerText = "Username is a mandatory field";
userError.style = "color: red";

const passError = document.createElement("p");
passError.innerText = "Password is a mandatory field";
passError.style = "color: red";

function login() {
  const usernameEl = document.getElementById("username");
  const passwordEl = document.getElementById("password");
  const username = usernameEl.value;
  const password = passwordEl.value;

  if (!username) {
    // console.log('Username is a mandatory field')

    form.insertBefore(error, usernameEl);
    return;
  }
  if (!password) {
    // console.log('Password is a mandatory field')

    form.insertBefore(error, passwordEl);
    return;
  }

  const msg = `Welcome ${username}`;
  header.innerText = msg;

  body.prepend(header);

  body.removeChild(form);

  body.appendChild(logoutButton);

  // window.location.href = "/home.html"
}
function disablePageReload(event) {
  event.preventDefault();
}

function logout() {
  body.removeChild(header);
  body.removeChild(logoutButton);
  body.appendChild(form);

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

function usernameChanged(event) {
  if (!event.target.value) {
    form.removeChild(userError);
  }
}
function passwordChanged(event) {
  if (!event.target.value) {
    form.removeChild(passError);
  }
}
