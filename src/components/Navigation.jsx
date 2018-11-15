import React from 'react';
import PropTypes from 'prop-types';
import NavigationItems from './NavigationItems';
import Book from './Book'

function Navigation() {
    const navItems = ["Become a host", "Help", "Sign up", "Log in"];
    return (
        <div>
            {/* <img   width="100%" src='https://a0.muscache.com/4ea/air/r:w775-h518-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg'></img> */}
            <div id="nav-container">

                <style jsx>{`
        ul {    
            list-style-type: none;
            position: absolute;
            right: 50px;
            float: right;
            top: 0;
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
           
        </div>
    );
}




Navigation.PropTypes = {
    navItem: PropTypes.array.isRequired
};

export default Navigation;