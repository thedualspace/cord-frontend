import React from "react";
import styled from 'styled-components';

import MovieItem from '../movieitem';

const MovieList = ({ movies, genreOptions, firstRender }) => (
    <MoviesWrapper>
        {/* 
            If there are no valid results, provide the user this info.
            This is purely for demonstration of error handling, styling should be completed to make it appropriately fit with current designs 
        */}
        {!movies.length && !firstRender.current &&
            <div>Sorry there were no results, try expanding your search!</div>
        }
        {/* Finish the MovieItem component and use it here to display the movie results */}
        {movies?.map((movie, idx) => (
            <MovieItem
                key={`movie-item-${idx}`}
                poster={movie.poster_path}
                heading={movie.original_title}
                rating={movie.vote_average}
                overview={movie.overview}
                release={movie.release_date}
                genreIds={movie.genre_ids}
                allGenres={genreOptions}
            />
        ))}
    </MoviesWrapper>
)

const MoviesWrapper = styled.div`
flex-direction: column;
  position: relative;
`

export default MovieList;