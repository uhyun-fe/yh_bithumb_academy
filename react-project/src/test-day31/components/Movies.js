import React from "react";
import PropTypes from "prop-types";

// Styles
import "../css/Movie.css";

export default function Movies({ list }) {
   return (
      <div className="movies">
         {list.map(({ id, large_cover_image, title, year, summary, genres }) => (
            <div key={id} className="movie">
               <a href="/">
                  <img src={large_cover_image} alt="movie_img" />
                  <h2 className="movie__title">{title}</h2>
                  <p className="movie__year">{year}</p>
                  <ul className="movie__genres">
                     {genres.map((g, i) => (
                        <li key={i}>{g}</li>
                     ))}
                  </ul>
               </a>
               <p>{summary}</p>
            </div>
         ))}
      </div>
   );
}

Movies.PropTypes = {
   year: PropTypes.number.isRequired,
   title: PropTypes.string.isRequired,
   summary: PropTypes.string.isRequired,
   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
