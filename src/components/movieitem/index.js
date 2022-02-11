import React, { useEffect } from "react";
import styled from 'styled-components';

//Components
import Pill from "../pill";

const MovieItem = ({ poster, heading, rating, overview, release, genreIds, allGenres }) => {
    //Convert ids returned by TMDB into human readable genres
    let genres = [];
    for (let i = 0; i < genreIds.length; ++i) {
        genres.push(
            allGenres.find(el => el.id === genreIds[i])?.name
        )
    }

    return (
        // Complete the MovieItem component
        <MovieItemWrapper>
            <LeftCont>
                <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt="Movie poster" />
            </LeftCont>
            <RightCont>
                <TopCont>
                    <UpperCont>
                        <h2>{heading}</h2>
                        <Pill rating={rating} />
                    </UpperCont>
                    <GenresContainer>
                        {genres.map((genre, idx) => (
                            <p key={`genre-${idx}`}>{genre}</p>
                        ))}
                    </GenresContainer>
                </TopCont>
                <BottomCont>
                    <p>{overview}</p>
                    <p className="date">{release}</p>
                </BottomCont>
            </RightCont>
        </MovieItemWrapper>
    )
}

const MovieItemWrapper = styled.div`
    display: flex;
    position: relative;
    background-color: ${props => props.theme.background};
    border-radius: 3px;
    margin-bottom: 15px;
    padding: 20px;
`

const LeftCont = styled.div`
    display: flex;
    margin-right: 20px;
    align-items: flex-start;

    img {
        max-width: 140px;
        object-fit: contain;
    }
`

const RightCont = styled.div`
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
`
const TopCont = styled.div`
    display: flex;
    flex-direction: column;
`

const GenresContainer = styled.div`
    display: flex;

    p {
        font-weight: bold;
        color: ${props => props.theme.primary};
        margin: 0;
        padding: 0 5px;
        border-right: 2px solid ${props => props.theme.primary};
    }
    p:first-child {
        padding-left: 0;
    }
    p:last-child {
        border: none;
    }

`

const UpperCont = styled.div`
    display: flex;
    flex: 1 1 100%;
    justify-content: space-between;

    h2 {
        margin: 0 15px 15px 0;
    }
`

const BottomCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 1 100%;
    p {
         margin-bottom: 0;
    }
    .date {
        color: ${props => props.theme.primary};
    }
`
export default MovieItem;