import React from "react";
import styled from 'styled-components';

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";

const SearchBar = ({ icon, inputHandler, placeholder }) => {
    return (
        <SearchBarWrapper>
            <IconCont>
                <SearchImage src={icon} />
            </IconCont>
            <InputCont>
                <input type="search" onChange={e => inputHandler(e.target.value)} placeholder={placeholder} ></input>
            </InputCont>
        </SearchBarWrapper>
    )
}

const SearchBarWrapper = styled.div`
    display: flex;
    position: relative;
    border-bottom: ${p => p.theme.primary} 3px solid;
`
const SearchImage = styled.img`
    width: 100%;
    position: relative;
    
`
const IconCont = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: 24px;
    width: 24px;
    padding: 8px;
`
const InputCont = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    flex: 1 1 100%;

    input {
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
    }
`

const Search = ({ setKeyword, setYear }) => {
    return (
        <SearchWrapper>
            <SearchBar icon={SearchIcon} inputHandler={setKeyword} placeholder="Search keyword" ></SearchBar>
            <SearchBar icon={CalendarIcon} inputHandler={setYear} placeholder="Year of release" ></SearchBar>
        </SearchWrapper>
    )

}

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`
export default Search;