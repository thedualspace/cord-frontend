import React from "react";
import { connect } from "react-redux";

//Actions
import { toggleMobileMenu } from "../../actions/utility.action";

//Components
import { Hamburger } from "./hamburger/Hamburger";
import { NavLink } from "react-router-dom";

//Styles
import "../../styles/components/navbar/mobileMenu.scss";

//Assets
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/insta.svg";

class MobileMenu extends React.Component {
    constructor(props) {
        super(props);
        //For every link in the navigation links:
        //if it has a dropdown property, add this link to the state with a defaut of closed.
        //This grabs all dropdowns immediately and allows the to have unique open/close states.
        for (let link of this.props.navigationLinks) {
            if (link.dropdown) {
                this.state = { [link.name]: "closed", ...this.state };
            }
        }
    }

    //Used for the mobile menu, to trigger open/close styles
    openStatus = () => {
        return this.props.open ? "open" : "";
    };

    //Used for submenu dropdowns, to trigger open/close styles
    toggleDropdown = (item) => {
        this.state[item.name] === "closed"
            ? this.setState({ [item.name]: "open" })
            : this.setState({ [item.name]: "closed" });
    };

    render() {
        const { navigationLinks, toggleMobileMenu } = this.props;
        //Separated this out because the nesting was getting a little out of hand
        const navigationLinksJSX = navigationLinks?.map((item, idx) => {
            if (item.dropdown) {
                return (
                    <li key={`li-${idx}`} onClick={() => this.toggleDropdown(item)}>
                        <NavLink to={item.href} onClick={toggleMobileMenu}>
                            {item.name}
                        </NavLink>
                        <span className="plus-dropdown"></span>
                        <div className={`submenu-dropdown ${this.state[item.name]}`}>
                            <ul>
                                {item.dropdown.map((subItem, idy) => (
                                    <li key={`li-${idx}-${idy}`}>
                                        <NavLink to={subItem.href} onClick={toggleMobileMenu}>
                                            {subItem.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                );
            } else {
                return (
                    <li key={`li-${idx}`}>
                        <NavLink to={item.href} onClick={toggleMobileMenu}>
                            {item.name}
                        </NavLink>
                    </li>
                );
            }
        });

        //Render return statement
        return (
            <div className="mobile-menu">
                <Hamburger openStatus={this.openStatus} toggleMobileMenu={toggleMobileMenu} />
                <div className={`mobile-links-container ${this.openStatus()}`}>
                    <ul>{navigationLinksJSX}</ul>
                    <div className="mobile-contact-icons-container">
                        <a href="https://www.instagram.com/obodocork/">
                            <Instagram />
                        </a>
                        <a href="https://www.facebook.com/obodocork/">
                            <Facebook />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    open: state.utility.mobileMenuOpen,
});

const mapDispatchToProps = (dispatch) => ({
    toggleMobileMenu: () => dispatch(toggleMobileMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);
