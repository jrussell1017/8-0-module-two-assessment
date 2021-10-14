let movieSelector = document.querySelector("#movie-dropdown");
let display = document.querySelector("#display-info");

fetch(`https://ghibliapi.herokuapp.com/films`).then((res) => {
  return res
    .json()
    .then((movies) => {
      console.log(movies);

      for (let movie of movies) {
        let option = document.createElement("option");
        option.textContent = movie.title;
        option.value = movie.title;
        movieSelector.append(option);
      }

      movieSelector.addEventListener("change", (e) => {
        e.preventDefault();

        for (let movie of movies) {
          let movieName = movie.title;
          let releaseYear = movie.release_date;
          let movieDescription = movie.description;

          if (e.target.value === movieName) {
            display.innerHTML = `<h3 id="movie-name">${movieName}</h2>
                    <p id="release-year">${releaseYear}</p>
                    <p id="movie-description">${movieDescription}</p>`;
          }
        }

        let form = document.querySelector("form");
        form.addEventListener("submit", (e) => {
          e.preventDefault();

          let ul = document.querySelector("ul");
          let li = document.createElement("li");

          li.innerHTML = `<strong>${movieSelector.value}:</strong> ${e.target["text-input"].value}`;
          ul.append(li);
          e.target.reset();
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
