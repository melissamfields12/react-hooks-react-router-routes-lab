import React from "react";
import { actors } from "../data";

function Actors() {

  const mappedActors = actors.map((actor) => {
    return (
      <div key={actor.name}>
        <h4>Name: {actor.name}</h4>
        <p>Movies:</p>
          <ul>
            {actor.movies.map((movie) =>
              <li key={movie}>{movie}</li>
            )}
          </ul>
      </div>
    )
  })
  return (

    <div>
     <h1>Actors Page</h1> 
      {mappedActors}
    </div>
  )
}

export default Actors;
