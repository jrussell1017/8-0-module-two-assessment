let movieSelector = document.querySelector("#movie-dropdown")
let display = document.querySelector("#display-info")

fetch(`https://ghibliapi.herokuapp.com/films`)
.then((res) => {
    return res.json()
    .then((movies) => {

        
        console.log(movies)
        
        for(let movie of movies) {
            let option = document.createElement("option")
            option.textContent = movie.title
            option.value = movie.title
            movieSelector.append(option)
        }
        
        
        movieSelector.addEventListener("change", (e) => {
           e.preventDefault()

           
           for(let movie of movies) {
                let movieName = movie.title
                let releaseYear = movie.release_date
                let movieDescription = movie.description

                if(e.target.value === movieName) {
                display.innerHTML = 
                    `<h3 id="movie-name">${movieName}</h2>
                    <p id="release-year">${releaseYear}</p>
                    <p id="movie-description">${movieDescription}</p>`   
                }                 
            }
            

            // let h3 = document.createElement("h3")
            // h3.textContent = movieName
            // display.append(h3)

            // let releaseYear = document.createElement("p")
            // releaseYear.textContent = releaseDate
            // display.append(releaseYear)

            // let description = document.querySelector("p")
            // description.textContent = movieDescription
            // display.append(description)

        })
    })
        .catch((err) => {
            console.log(err)
        })
    })
