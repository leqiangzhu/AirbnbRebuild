import React from 'react';
import PropTypes from 'prop-types';

function NavigationItems(props){
    return(
        <div>
            <li>{props.navItems}</li>
        </div>
    );
}

NavigationItems.PropTypes = {
    navItems: PropTypes.string.isRequired
};

export default NavigationItems;