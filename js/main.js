const jokesButton = document.getElementById("jokes");

function logError(error) {
  console.log("Looks like there was a problem:", error);
}

function getJokes(data) {
  return data.json();
}

function makeJokesCollection(data) {
  // Adds joke to the Jokes array
  return data.value.map(joke => {
    // formats text string correctly

    return {
      ...joke,
      joke: joke.joke
        .replace(/&quot;/g, '"')
        .split(".")
        .join(". ")
    };
  });
}

function renderJokes(jokes) {
  const ul = document.querySelector(".jokes-contianer");

  jokes.forEach(joke => {
    // renderJoke comes from the file render_joke.js
    ul.appendChild(renderJoke(joke));
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
