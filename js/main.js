const jokesButton = document.getElementById("jokes");

function logError(error) {
  // console.log("Looks like there was a problem:", error);
}

function getJokes(data) {
  return data.json();
}

function makeJokesCollection(data) {
  let item = "";
  let jokes = [];

  data.value.map(joke => {
    // TODO CREATE BETTER STRING FORMATTER FUNCTION
    item += joke.joke
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
    const li = document.createElement("li");
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    const p = document.createElement("p");
    li.classList.add("card");
    div2.classList.add("unchecked-heart");
    div2.innerHTML = "&#9825";

    // Add heart like button to joke card
    // Add two divs to card div
    // Add text in p element
    // Add p element to card div
    // add heart to card div

    p.innerText = joke;
    div.appendChild(p);
    li.appendChild(div);
    li.appendChild(div2);
    ul.appendChild(li);

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
