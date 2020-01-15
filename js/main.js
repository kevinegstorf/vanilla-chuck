const jokesButton = document.getElementById("jokes");

function logError(error) {
  console.log("Looks like there was a problem:", error);
}

function getJokes(data) {
  return data.json();
}

function makeJokesCollection(data) {
  // Initialize types needed to add joke in an Array
  let item = "";
  let jokes = [];

  // Adds joke to the Jokes array
  data.value.map(joke => {
    // formats text string correctly
    item = joke.joke
      .replace(/&quot;/g, '"')
      .split(".")
      .join(". ");

    jokes.push(item);
  });
  return jokes;
}

function renderJokes(jokes) {
  const ul = document.querySelector(".jokes-contianer");

  jokes.map(joke => {
    // creates elements to make Joke Card
    const li = document.createElement("li");
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    const p = document.createElement("p");

    // adds classes to created elements for Joke
    li.classList.add("card");
    div2.classList.add("unchecked-heart");

    // Adds Empty Heart icon to Joke Card
    div2.innerHTML = "&#9825";

    // Adds Joke to paragraph element
    p.innerText = joke;

    // Appending Children to build Card element correctly
    div.appendChild(p);
    li.appendChild(div);
    li.appendChild(div2);
    ul.appendChild(li);

    // Heart icon Click Handler to toggle favorite Joke.
    div2.addEventListener("click", e => {
      e.preventDefault();
      div2.innerHTML === "♥" ? (div2.innerHTML = "♡") : (div2.innerHTML = "♥");
      console.log("click", joke);
    });
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

Test();
