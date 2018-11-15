import React from 'react';
import PropTypes from 'prop-types';
import NavigationItems from './NavigationItems';

function Navigation() {
    const navItems = ["Become a host", "Help", "Sign up", "Log in"];
  return (
    <div>
        <style jsx>{`
        text-decoration: underline;
        `}</style>
      <ul>
        {navItems.map((item, index) =>
          <NavigationItems navItems={item}
            key={index} />
        )}
      </ul>
    </div>
  );
}




Navigation.PropTypes = {
  navItem: PropTypes.array.isRequired
};

export default Navigation;