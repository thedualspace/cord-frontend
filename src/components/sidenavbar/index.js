import React, { useState } from "react";
import styled, { css } from 'styled-components';
import { NavLink as Link } from "react-router-dom";

//Components
import { Hamburger } from "./hamburger"; 

import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

const SideNavBar = () => {
    /* Write the necessary functions to show and hide the side bar on small devices */
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SideNavBarCont isOpen={isOpen}>
            {/* Implement a hamburger icon slide in effect for small devices */}
            <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
            <SideNavMainLink className="menu_nav_link main_nav_link" to="/" exact>
                Wesley
                <NavIcon src={Arrow}></NavIcon>
            </SideNavMainLink>
            <SideNavMainLink className="menu_nav_link" to="/discover">
                Discover
                <NavIcon src={SearchWhite}></NavIcon>
            </SideNavMainLink>
            <SideNavHeader><HeaderText>Watched</HeaderText></SideNavHeader>
            <NavLink className="menu_nav_link" to="/watched/movies">Movies</NavLink>
            <NavLink className="menu_nav_link" to="/watched/tv-shows">Tv Shows</NavLink>
            <SideNavHeader><HeaderText>Saved</HeaderText></SideNavHeader>
            <NavLink className="menu_nav_link" to="/saved/movies">Movies</NavLink>
            <NavLink className="menu_nav_link" to="/saved/tv-shows">Tv Shows</NavLink>
        </SideNavBarCont>
    );
}

const SideNavBarCont = styled.div`
    position: fixed;
    z-index: 9;
    width: 260px;
    height: 100%;
    background-color: ${p => p.theme.sideNavBar};
    left: 0;
    transition: left 0.5s ease-in-out; 
    flex-direction: column;

    @media only screen and (max-width: ${p => p.theme.mobileSize}px) {
        left: ${(props) => props.isOpen ? "0" : "-260px"};
        top: 64px;
    }

`

const SideNavMainLink = styled(Link)`
  position: relative;
  display: block;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
  :hover {
      background: ${p => p.theme.primary};
  }
`

const NavIcon = styled.img`
  position: absolute;
  right: 35px;
  top: 50%;
  transform: translate(0, -50%);
`

const SideNavHeader = styled.div`
  position: relative;
  display: block;
  padding: 25px 35px;
  padding-left: 0;
  margin-left: 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);

  :hover {
      background: ${p => p.theme.primary};
      margin-left: 0;
      padding-left: 35px;
  }

`

const HeaderText = styled.div`

`

const NavLink = styled(Link)`
  position: relative;
  display: block;
  padding: 25px 35px;
  font-size: 1.4em;
  font-weight: 300;
  color: white;
  :hover {
      background: ${p => p.theme.primary};
  }
`

export default SideNavBar;