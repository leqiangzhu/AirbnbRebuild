import React from 'react';
import PropTypes from 'prop-types';

function NavigationItems(props) {
    return (
        <li>
            <style jsx>{`
                    li {
                        font-size: 14px;
                        display: inline-block;
                        margin-right: 10px;
                        padding: 8px;
                    }
            `}
            </style>
            {props.navItems}
        </li>
    );
}

NavigationItems.PropTypes = {
    navItems: PropTypes.string.isRequired
};

export default NavigationItems;