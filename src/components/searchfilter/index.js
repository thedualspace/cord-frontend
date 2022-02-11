import React from "react";
import styled, { css } from 'styled-components';

import * as colors from "../../colors";
import ExpandableFilter from "../../components/expandablefilter";
import Checkbox from "../checkbox";
import Search from "../../components/searchbar";

export default class SearchFilters extends React.Component {
    render() {
        const { genres, setGenres, ratings, setRatings, languages, setLanguages, setKeyword, setYear } = this.props;

        return (
            <FiltersWrapper>
                <SearchFiltersCont className="search_inputs_cont" marginBottom>
                    {/* Implement a "SearchBar" component and re-use it for the keyword and the year inputs */}
                    <Search setKeyword={setKeyword} setYear={setYear}></Search>
                </SearchFiltersCont>
                <SearchFiltersCont>
                    <CategoryTitle>Movie</CategoryTitle>
                    {/* Implement a component called "ExpandableFilter" and apply it to all filter categories */}
                    <ExpandableFilter title="Select genre(s)">
                        {genres.map((genre, idx) => (
                            <Checkbox onChange={setGenres} collection={genres} item={genre} key={idx} />
                        ))}
                    </ExpandableFilter>
                    <ExpandableFilter title="Select min. vote">
                        {ratings.map((rating, idx) => (
                            <Checkbox onChange={setRatings} collection={ratings} item={rating} key={idx} />
                        ))}
                    </ExpandableFilter>
                    <ExpandableFilter title="Select language(s)">
                        {languages.map((language, idx) => (
                            <Checkbox onChange={setLanguages} collection={languages} item={language} key={idx} />
                        ))}
                    </ExpandableFilter>
                </SearchFiltersCont>
            </FiltersWrapper>
        )
    }
}

const FiltersWrapper = styled.div`
  position: relative;
`

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all .3s ease-in-out;
  
  ${props => props.marginBottom && css`
    margin-bottom: 15px;
  `}
`

const CategoryTitle = styled.div`
    margin-bottom: 16px;
    font-weight: 800 ;

`