


fetch(`https://ghibliapi.herokuapp.com/films`)
.then((res) => {
    return res.json()
    .then((data) => {

        let movieName = data.title
        let releaseDate = data.release_date
        let movieDescription = data.description

        let movieSelector = document.querySelector("#movie-dropdown")
            console.log(data)
        
        for(let movie of data) {
            let option = document.createElement("option")
            option.textContent = movie.title
            option.value = movie.title
            movieSelector.append(option)
        }

        movieSelector.addEventListener("", () => {
            
        })


    
        
        })
    })
