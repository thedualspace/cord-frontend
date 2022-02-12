import React from "react";
import styled, {css} from 'styled-components';

import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";
import FiltersIcon from "../../images/filter-icon.png";

const SearchBar = ({ icon, inputHandler, toggleFiltersShown, placeholder, showFiltersIcon, shown }) => {
    return (
        <SearchBarWrapper shown={shown}>
            <IconCont>
                <SearchImage src={icon} />
            </IconCont>
            <InputCont>
                <StyledInput type="search" onChange={e => inputHandler(e.target.value)} placeholder={placeholder} />
            </InputCont>
            {showFiltersIcon &&
                <IconCont hideOnDesktop onClick={() => toggleFiltersShown()} marginLeft>
                    <StyledFiltersIcon src={FiltersIcon} />
                </IconCont>
            }
        </SearchBarWrapper>
    )
}

const SearchBarWrapper = styled.div`
    display: flex;
    position: relative;

    ${props => !props.shown && css`
        display: none;
    `};
`
const SearchImage = styled.img`
    width: 100%;
    position: relative;
    
`

const StyledFiltersIcon = styled.img`
    display: none;
    /* border-bottom: ${p => p.theme.primary} 3px solid; */
    max-width: 24px;
    max-height: 24px;
    
    @media only screen and (max-width: ${p => p.theme.mobileSize}px) {
        display: flex;
    }
`

const IconCont = styled.div`
    //Cant tell if this display method is dodgy af or kinda genius
    display: ${p => p.hideOnDesktop ? "none" : "flex"};
    align-items: center;
    position: relative;
    height: 24px;
    width: 24px;
    padding: 8px;
    border-bottom: ${p => p.theme.primary} 3px solid;
    margin-left: ${p => p.marginLeft ? "12px" : "0"};

    @media only screen and (max-width: ${p => p.theme.mobileSize}px) {
        display: flex;
    }
`
const InputCont = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    flex: 1 1 100%;
    border-bottom: ${p => p.theme.primary} 3px solid;
`

const StyledInput = styled.input`
    flex: 1 1 100%;
    border: none;
    color: ${p => p.theme.primary};

    ::placeholder {
        opacity: 0.5;
        color: ${p => p.theme.primary};
    }
    :focus {
       outline: none; 
    }
`

const Search = ({ setKeyword, setYear, toggleFiltersShown, filtersShown }) => {
    return (
        <SearchWrapper>
            <SearchBar
                icon={SearchIcon}
                inputHandler={setKeyword}
                toggleFiltersShown={toggleFiltersShown}
                placeholder="Search for movies"
                showFiltersIcon
                shown
            />
            <SearchBar
                icon={CalendarIcon}
                inputHandler={setYear}
                placeholder="Year of release"
                shown={filtersShown}
            />
        </SearchWrapper>
    )

}

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`
export default Search;