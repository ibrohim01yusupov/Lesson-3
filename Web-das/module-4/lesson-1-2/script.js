'use strict'

movies.splice(50)

//  ------ NORMALIZE ALL MOVIES  ------//

const AllMovies = movies.map((movies) => {
  return {
    title: movies.title,
    year: movies.year,
    lang: movies.language,
    category: movies.categories,
    id: movies.imdbId,
    time: ` ${Math.floor(movies.runtime / 60)}h  ${movies.runtime % 60}m`,
    summary: movies.summary,
    link: `https://www.youtube.com/embed/${movies.youtubeId}`,
    maxImg: movies.bigThumbnail,
    minIMG: movies.smallThumbnail,
    rating: movies.imdbRating,
  }
})

console.log(AllMovies);

//  ------ NORMALIZE ALL MOVIES------//

function renderAllMovies() {
  AllMovies.forEach((el) => {
    const card = document.createElement('div')
    card.classList.add('col-md-6', 'p-3', 'bg-light', 'my-2')
    card.innerHTML = `
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
      <div >
      <div >
           <div class="card">
            <iframe  class="card-img" width="560" height="315" src="${el.link}" 
             
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
           </div>
           <div class="card-body">
            <h4 class="card-title">
                 ${el.title}
            </h4>
            <ul class="list-unstyled">
                <li> <strong>Year:</strong> </li>
                <li> <strong>Language:</strong> </li>
                <li> <strong>Rating:</strong> </li>
                <li> <strong>Category:</strong> </li>
                <li> <strong>Runtime:</strong> </li>
            </ul>

               <div class="social d-flex">
                <button class="btn btn-danger m-2">
                     Trailer
                </button>

                <button class="btn btn-primary m-2">
                     Read more . . . 
                </button>

                <button class="btn btn-warning m-2">
                     Add bookmark
                </button>
               </div>

           </div>
       </div>)`

    $('.app-row').appendChild(card)
  })
}

renderAllMovies()




      // const findFilm=()=>{


      //  return AllMovies.filter((film)=>{
      
      //  })

      // }






      

      


      


       