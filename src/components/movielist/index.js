import React from "react";
import styled from 'styled-components';

import MovieItem from '../movieitem';

export default class MovieList extends React.Component {

    render() {
        const { movies, genreOptions } = this.props;

        return (
            <MoviesWrapper>
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
    }
}

const MoviesWrapper = styled.div`
flex-direction: column;
  position: relative;
`