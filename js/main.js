const jokesButton = document.getElementById("jokes");

function logError(error) {
  console.log("Looks like there was a problem:", error);
}

function getJokes(data) {
  return data.json();
}

function makeJokesCollection(data) {
  let item = "";
  let jokes = [];

  data.value.map(joke => {
    item += joke.joke;
    jokes.push(item);
  });
  return jokes;
}

function renderJokes(jokes) {
  const ul = document.querySelector(".jokes-contianer");

  jokes.map(joke => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const span = document.createElement("span");
    div.classList.add("joke-card");
    span.innerHTML = "&#9825";

    div.appendChild(span);
    li.appendChild(div);
    div.innerText = joke;
    ul.appendChild(li);
  });
}

function FetchChuckJokes() {
  fetch("https://api.icndb.com/jokes/random/10.")
    .then(getJokes)
    .then(makeJokesCollection)
    .then(renderJokes)
    .catch(logError);
}

jokesButton.addEventListener(
  "click",
  e => {
    e.preventDefault();
    FetchChuckJokes();
  },
  false
);
