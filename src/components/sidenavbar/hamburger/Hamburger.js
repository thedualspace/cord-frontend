import React from "react";

//Styles
import "../../../styles/components/navbar/hamburger.scss";

export const Hamburger = ({ toggleMobileMenu, openStatus }) => {
    return (
        <button className="hamburger" onClick={toggleMobileMenu}>
            <div className={`${openStatus()}`} />
            <div className={`${openStatus()}`} />
            <div className={`${openStatus()}`} />
        </button>
    );
};
