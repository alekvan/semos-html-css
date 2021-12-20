// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

async function getUsers() {
  let url = "https://jsonplaceholder.typicode.com/users";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
async function renderUsers() {
  let users = await getUsers();
  let html = "";
  users.forEach((card, index) => {
    let htmlSegment = `<div class="card userCard border border-dark" style="width: 350px; margin: 8px">
                      <img class="card-img-top" src="./img/person_0${index}.jpg" alt="Card image cap" />
                      <div class="card-body">
                        <h5 class="card-title">${card.name}</h5>
                        <p class="card-text">
                          <b>Address:</b> ${card.address.street}, ${card.address.suite}, ${card.address.city} <br>
                          <b>Tel:</b> ${card.phone} </br>
                          <b>Job:</b> ${card.company.bs} </br>
                          <a href="${card.email}">${card.email}</a>
                        </p>
                      </div>
                    </div>`;

    html += htmlSegment;
  });

  let container = document.querySelector(".container-auto");
  container.innerHTML = html;
}

renderUsers();
