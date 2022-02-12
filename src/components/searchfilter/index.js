import React, { useState } from "react";
import styled, { css } from 'styled-components';

import ExpandableFilter from "../../components/expandablefilter";
import Checkbox from "../checkbox";
import Search from "../../components/searchbar";
import { theme } from "../../theme";

const SearchFilters = ({ genres, setGenres, ratings, setRatings, languages, setLanguages, setKeyword, setYear }) => {
    //Filters hidden by default on mobile screens
    const width = window.innerWidth;
    const [filtersShown, setFiltersShown] = useState( width > theme.mobileSize );

    const toggleFiltersShown = (state) => {
        if (state) {
            setFiltersShown(state);
        } else {
            setFiltersShown(!filtersShown);
        }
    }

    return (
        <FiltersWrapper>
            <SearchFiltersCont className="search_inputs_cont" marginBottom shown>
                {/* Implement a "SearchBar" component and re-use it for the keyword and the year inputs */}
                <Search
                    setKeyword={setKeyword}
                    setYear={setYear}
                    filtersShown={filtersShown} 
                    toggleFiltersShown={toggleFiltersShown}
                />
            </SearchFiltersCont>
            <SearchFiltersCont shown={filtersShown}>
                <CategoryTitle>Movie</CategoryTitle>
                {/* Implement a component called "ExpandableFilter" and apply it to all filter categories */}
                <ExpandableFilter title="Select genre(s)">
                    {genres.map((genre, idx) => (
                        <Checkbox
                            onChange={setGenres}
                            collection={genres}
                            item={genre}
                            key={idx}
                        />
                    ))}
                </ExpandableFilter>
                <ExpandableFilter title="Select min. vote">
                    {ratings.map((rating, idx) => (
                        <Checkbox
                            onChange={setRatings}
                            collection={ratings}
                            item={rating}
                            key={idx}
                        />
                    ))}
                </ExpandableFilter>
                <ExpandableFilter title="Select language(s)">
                    {languages.map((language, idx) => (
                        <Checkbox
                            onChange={setLanguages}
                            collection={languages}
                            item={language}
                            key={idx}
                        />
                    ))}
                </ExpandableFilter>
            </SearchFiltersCont>
        </FiltersWrapper>
    )
}

const FiltersWrapper = styled.div`
    width: 100%;
    position: relative;
    flex-direction: column;
    margin-top:29px;

    @media only screen and (max-width: ${p => p.theme.mobileSize}px) {
        margin-top: 0;
    }
`

const SearchFiltersCont = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    border-radius: 3px;
    transition: all .3s ease-in-out;
    margin-bottom: ${props => props.marginBottom && `margin-bottom: 15px;`};
  
    ${props => !props.shown && css`
        display: none;
    `};

    @media only screen and (max-width: ${p => p.theme.mobileSize}px) {
        background-color: unset;
        padding: 15px 0;
    }
`

const CategoryTitle = styled.div`
    margin-bottom: 16px;
    font-weight: 800 ;

`

export default SearchFilters;