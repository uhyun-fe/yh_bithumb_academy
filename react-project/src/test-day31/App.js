import React, { Component } from "react";

// Styles
import "./css/base.scss";

// Images
import sample from "../img/puzzle.jpg";

// Components
import MyButtons from "./components/MyButtons";
import Movies from "./components/Movies";

// Api
import { movieApi } from "./api";

export class App extends Component {
   state = {
      isLoading: true,
      movies: [],
   };

   handleMovies = async () => {
      try {
         const {
            data: {
               data: { movie_count, movies, page_number },
            },
         } = await movieApi.getList();
         console.log(movies);
         this.setState({ isLoading: false, movies });
      } catch (error) {
         console.error(error);
      }
   };

   async componentDidMount() {
      this.handleMovies();
   }

   render() {
      const { isLoading, movies } = this.state;
      return (
         <div className="App">
            {/* <img src={sample} alt="sample" width="300" height="150" /> */}
            {/* <MyButtons /> */}
            {isLoading ? (
               <div className="loading">
                  <img src={sample} alt={"loading"} />
                  <p>Loading...</p>
               </div>
            ) : (
               <Movies list={movies} />
            )}
         </div>
      );
   }
}

export default App;
