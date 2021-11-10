console.log("works");

function getNewJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((json) => (document.querySelector("#joke").innerHTML = json.value));
}


getNewJoke();
