import React from "react";
import { connect } from "react-redux";

//Components
import { NavLink } from "react-router-dom";
import { Button } from "../button/button";
import MobileMenu from "./mobileMenu";

//Styles
import "../../styles/components/navbar/NavBar.scss";

//Assets
import defaultLogo from "../../assets/logos/obodo-logo.png";

class Navbar extends React.Component {
    render() {
        const { navigationLinks, logo = defaultLogo } = this.props;

        const navigationLinksJSX = navigationLinks?.map((item, idx) => {
            if (item.dropdown) {
                //If a link has a dropdown, li with dropdown links inside
                return (
                    <li key={`li-${idx}`}>
                        <NavLink className={`navbar-link dropdown`} to={item.href}>
                            {item.name}
                        </NavLink>
                        <div className="dropdown-container">
                            <div className={`dropdown-content`}>
                                <ul>
                                    {item.dropdown.map((subItem, idy) => (
                                        <li key={`li-${idx}-${idy}`}>
                                            <NavLink to={subItem.href}>{subItem.name}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                );
            } else {
                //If link has no dropdown, regular li
                return (
                    <li key={`li-${idx}`}>
                        <NavLink to={item.href} className={`navbar-link`}>
                            {item.name}
                        </NavLink>
                    </li>
                );
            }
        });

        return (
            <div className={`navbar-container`}>
                <div className="navbar">
                    <div className="navbar-root">
                        <div className="navbar-left">
                            <div className="login-button-container">
                                <Button label="LOGIN" type="secondary" linkTo="/login" />
                            </div>
                            <div className="logo-container">
                                <NavLink to="/">
                                    <img src={logo} alt="Company Logo" />
                                </NavLink>
                            </div>
                            {/* <div className="navbar-links-container">
                                <ul>{navigationLinksJSX}</ul>
                            </div> */}
                            <MobileMenu navigationLinks={navigationLinks} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);