import React from 'react';

export const navItems = ["Become a host", "Help", "Sign up", "Log in"];

function nav() {
    return (
        <div>
            {navItems.map((navigation, index) =>
                <div>
                    <NavigationList
                        item={navigation}
                        key={index}
                    />
                </div>
            )}
        </div>
    )
}

export default nav;