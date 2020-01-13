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
    let li = document.createElement("li");
    li.innerText = joke;
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

jokesButton.addEventListener("click", () => {
  FetchChuckJokes();
});
