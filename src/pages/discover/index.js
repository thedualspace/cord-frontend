import React, { useState, useEffect, useRef, useCallback } from "react";
import { debounce } from "lodash";
import styled from 'styled-components';

import { fetchPopularMovies, fetchAllGenres, searchMovies } from "../../scripts";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

const Discover = () => {
    const [keyword, setKeyword] = useState("");
    const [year, setYear] = useState(0);
    const [results, setResults] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [genreOptions, setGenreOptions] = useState([]);
    const [ratingOptions, setRatingOptions] = useState([
        { id: 7.5, name: 7.5, isActive: false },
        { id: 8, name: 8, isActive: false },
        { id: 8.5, name: 8.5, isActive: false },
        { id: 9, name: 9, isActive: false },
        { id: 9.5, name: 9.5, isActive: false },
        { id: 10, name: 10, isActive: false }
    ]);
    const [languageOptions, setLanguageOptions] = useState([
        { id: 'EN', name: 'English', isActive: false },
        { id: 'GR', name: 'Greek', isActive: false },
        { id: 'RU', name: 'Russian', isActive: false },
        { id: 'PO', name: 'Polish', isActive: false }
    ]);
    //Used to get popular movies instead of keyword search on first render;
    const firstRender = useRef(true);

    // Write a function to preload the popular movies when page loads & get the movie genres
    const setPopularMovies = () => {
        fetchPopularMovies().then(movies => {
            setTotalCount(movies.total_results);
            setResults(movies.results);
        });
        fetchAllGenres().then(({ genres }) => {
            const resultsWithActiveState = genres.map(obj => ({ ...obj, isActive: false }));
            setGenreOptions(resultsWithActiveState);
        });
    }


    // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
    //Second arg of debounce can be used to change delay time in ms
    const debouncedSearch = useCallback(
        debounce((keyword) => {
            searchMovies(keyword)
                .then(movies => {
                    setTotalCount(movies.total_results);
                    setResults(movies.results);
                })
        }, 2000), []
    );

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            setPopularMovies();
        } else if (keyword === "") {
            debounce(() => setPopularMovies());
        } else {
            debouncedSearch(keyword);
        }
    }, [keyword, year, debouncedSearch])



    return (
        <DiscoverWrapper>
            <MobilePageTitle>Discover</MobilePageTitle> {/* MobilePageTitle should become visible on small screens & mobile devices*/}
            <MovieResults>
                {totalCount > 0 && <TotalCounter>{totalCount} movies</TotalCounter>}
                <MovieList
                    movies={results || []}
                    genreOptions={genreOptions || []}
                />
            </MovieResults>
            <MovieFilters>
                <SearchFilters
                    genres={genreOptions}
                    setGenres={setGenreOptions}
                    ratings={ratingOptions}
                    setRatings={setRatingOptions}
                    languages={languageOptions}
                    setLanguages={setLanguageOptions}
                    setKeyword={setKeyword}
                    setYear={setYear}
                />
            </MovieFilters>
        </DiscoverWrapper>
    )
}

const DiscoverWrapper = styled.main`
    padding: 60px 45px;
    display: flex;

    @media only screen and (max-width: ${p => p.theme.mobileSize}px) {
        flex-direction: column;
        padding: 16px;
    }
`

const TotalCounter = styled.div`
  font-weight: 400;
  padding: 16px 0;
`

const MovieResults = styled.div`
    flex: 1 1 75%;
    flex-direction: column;

    @media only screen and (max-width: ${p => p.theme.mobileSize}px) {
        order: 2;
    }
`

const MovieFilters = styled.div`
    flex: 1 1 25%;
    margin: 21px 0 15px 15px;

    @media only screen and (max-width: ${p => p.theme.mobileSize}px) {
        order: 1;
        margin: 15px 0;
    }
`

const MobilePageTitle = styled.header`
    display: none;

    @media only screen and (max-width: ${p => p.theme.mobileSize}px) {
        display: flex;
    }

`
export default Discover;