// Maybe add another property which tells what page i am on to determain heart needs to be filled or not
function cardElementsCreator(joke) {
  this.li = document.createElement("li");
  this.div = document.createElement("div");
  this.heartElement = document.createElement("div");
  this.p = document.createElement("p");

  // adds classes to created elements for Joke
  this.li.classList.add("card");
  this.heartElement.classList.add("heart");
  this.heartElement.setAttribute("id", joke.id);

  // Adds Empty Heart icon to Joke Card
  this.heartElement.innerHTML = "♡";

  // Adds Joke to paragraph element
  this.p.innerText = joke.joke;

  return {
    li: this.li,
    div: this.div,
    heartElement: this.heartElement,
    p: this.p
  };
}

function renderJoke(joke, selected) {
  // creates elements to make Joke Card
  const { li, div, heartElement, p } = cardElementsCreator(joke);

  // Appending Children to build Card element correctly
  div.appendChild(p);
  li.appendChild(div);
  li.appendChild(heartElement);

  heartElement.innerHTML = selected ? "♥" : "♡";

  // Heart icon Click Handler to toggle favorite Joke.
  heartElement.addEventListener("click", e => {
    e.preventDefault();

    if (heartElement.innerHTML === "♡") {
      heartElement.innerHTML = "♥";
      idbApp.saveJoke(joke);
    } else if ((heartElement.innerHTML = "♥")) {
      heartElement.innerHTML = "♡";
      idbApp.removeJoke(joke);
      li.style.display = "none";
    }
  });
  return li;
}
