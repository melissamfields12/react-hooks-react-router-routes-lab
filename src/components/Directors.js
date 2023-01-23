import React from "react";
import { directors } from "../data";

function Directors() {

  const mappedDirectors = directors.map((director) => {
   return (
    <div key={director.name}>
      <h4>Name: {director.name}</h4>
      <p>Movies:</p>
        <ul>
          {director.movies.map((movie) =>
           <li key={movie}>{movie}</li>
        )}
      </ul>
    </div>
  )
  })

  return (
    <div>
    <h1>Directors Page</h1>
      {mappedDirectors}
    </div>
  )
}

export default Directors;
