function RenderFavoriteJokes() {
  this.showButton = document.querySelector("#show-favs");
  this.ClearButton = document.querySelector("#clear-all-jokes");
  this.FindJokeButton = document.querySelector("#find-joke");

  this.showButton.addEventListener("click", () => {
    idbApp.getAllJokes();
  });

  this.ClearButton.addEventListener("click", () => {
    idbApp.removeAllJokes();
  });

  this.FindJokeButton.addEventListener("click", () => {
    const keyword = document.querySelector("#search").value;
    idbApp.findJoke(keyword);
  });
}

// On load start the app.
window.addEventListener("load", function() {
  new RenderFavoriteJokes();
});
