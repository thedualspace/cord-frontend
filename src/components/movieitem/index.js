import React, { useEffect } from "react";
import styled from 'styled-components';

//Components
import Pill from "../pill";

//Assets
import defaultPoster from "../../images/default-poster.png"

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
                {poster ?
                    <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt="Movie poster" />
                    :
                    <img src={defaultPoster} alt="Movie poster" />
                }
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
                    <Overview>{overview}</Overview>
                    <Date>{release}</Date>
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

    @media only screen and (max-width: ${p => p.theme.mobileSize}px) {
        img {
            max-width: 95px;
        }
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
    flex-wrap: wrap;

    p {
        font-weight: bold;
        font-size: 10px;
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
        margin: 0 15px 5px 0;
    }

    @media only screen and (max-width: ${p => p.theme.mobileSize}px) {
        h2 {
            font-size: 20px;
        }
    }
`

const BottomCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 1 100%;
`

const Overview = styled.p`
    margin-bottom: 0;
    margin-top: 10px;

    @media only screen and (max-width: ${p => p.theme.mobileSize}px) {
        font-size: 13px;
        line-height: 14px;
        max-height: 70px;
        overflow: hidden;
    }
    /*Could not get the fade out overflow to work using this method, or any other*/
    /* @media only screen and (max-width: ${p => p.theme.mobileSize}px) {
        :after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 30%;
        height: 100%;
        background:linear-gradient(to right, rgba(240, 244, 245, 0), rgba(240, 244, 245, 1));
        pointer-events: none;
        }
    } */
`

const Date = styled.p`
    color: ${props => props.theme.primary};
    font-size: 10px;
`

export default MovieItem;