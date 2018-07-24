import React, { Component } from 'react';
import BottomNavigation from 'material-ui/BottomNavigation';
import BottomNavigationItem from 'material-ui/BottomNavigation/BottomNavigationItem';

class BottomNav extends Component {
  render() {
    return (
      <div>
        <BottomNavigation className="bottomNavigation">
          <a
            href="https://github.com/robhern135/"
            rel="noopener noreferrer"
            target="_blank">
            <BottomNavigationItem
              label="Github"
              icon={(<i className="fab fa-github"></i>)}
            />
          </a>
          <a
            href="http://robhern.co.uk/"
            rel="noopener noreferrer"
            target="_blank">
            <BottomNavigationItem
              label="Portfolio"
              icon={(<i className="far fa-file-code"></i>)}
            />
          </a>
        </BottomNavigation>
      </div>
    )
  }
}

export default BottomNav;