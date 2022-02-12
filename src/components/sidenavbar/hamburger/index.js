import React from "react";
import styled from "styled-components";

export const Hamburger = ({ isOpen, setIsOpen }) => {
    return (
        <StyledHamburger className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <div className={`${isOpen && "open"}`} />
            <div className={`${isOpen && "open"}`} />
            <div className={`${isOpen && "open"}`} />
        </StyledHamburger>
    );
};

const StyledHamburger = styled.button`
    position: fixed;
    left: 16px;
    top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 32px;
    height: 32px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 10000;
    margin-top: 0 !important;
    padding: 0;

    @media only screen and (min-width: ${p => p.theme.mobileSize}px) {
        display: none;
    }

    &:focus {
        outline: none;
    }

    div {
        width: 32px;
        height: 3px;
        background: ${p => p.theme.fontDark};
        border-radius: 0.72rem;
        transition: all 0.3s ease-in-out;
        position: relative;
        transform-origin: 1px;
        flex-grow: initial;

        &:first-child {
            transform: rotate(0);
        }

        &:nth-child(2) {
            opacity: 1;
        }

        &:nth-child(3) {
            transform: rotate(0);
        }

        &.open {
            &:first-child {
                transform: rotate(45deg);
            }

            &:nth-child(2) {
                opacity: 0;
            }

            &:nth-child(3) {
                transform: rotate(-45deg);
            }
        }
    }
`;
