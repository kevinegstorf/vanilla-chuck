function VanillaChuckApp() {
  this.jokesButton = document.getElementById("jokes");

  VanillaChuckApp.prototype.logError = function(error) {
    console.log("Looks like there was a problem:", error);
  };

  VanillaChuckApp.prototype.getJokes = function(data) {
    return data.json();
  };

  VanillaChuckApp.prototype.makeJokesCollection = function(data) {
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
  };

  VanillaChuckApp.prototype.renderJokes = function(jokes) {
    this.ul = document.querySelector(".jokes-contianer");

    jokes.forEach(joke => {
      // renderJoke comes from the file render_joke.js
      this.ul.appendChild(renderJoke(joke));
    });
  };

  VanillaChuckApp.prototype.FetchChuckJokes = function() {
    fetch("https://api.icndb.com/jokes/random/10.")
      .then(this.getJokes)
      .then(this.makeJokesCollection)
      .then(this.renderJokes)
      .catch(this.logError);
  };

  this.jokesButton.addEventListener(
    "click",
    e => {
      e.preventDefault();
      this.FetchChuckJokes();
    },
    false
  );
}

// On load start the app.
window.addEventListener("load", function() {
  new VanillaChuckApp();
});
