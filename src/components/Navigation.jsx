import React from 'react';
import PropTypes from 'prop-types';
import NavigationItems from './NavigationItems';

function Navigation() {
    const navItems = ["Become a host", "Help", "Sign up", "Log in"];
    return (
        <div id="nav-container">
            <style jsx>{`
        ul {    
            list-style-type: none;
            float: right;
        }
        #nav-container {
            height: 80px;
            width: 100%;
        }
        `}</style>
            <ul>
                {/* <li> */}
                    {navItems.map((item, index) =>
                        <NavigationItems navItems={item}
                            key={index} />

                    )}
                {/* </li> */}
            </ul>
        </div>
    );
}




Navigation.PropTypes = {
    navItem: PropTypes.array.isRequired
};

export default Navigation;