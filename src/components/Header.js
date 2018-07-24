import React from 'react';
import Appbar from 'material-ui/AppBar';


const Header = () => (
  <div className="appbar">
    <Appbar
      title="ReactJS Ipsum Generator"
      showMenuIconButton={false}
    >
      <span className="appbar-span">by: 
        <a className="appbar-link" href="http://robhern.co.uk" rel="noopener noreferrer" target="_blank">Rob Hern</a>
      </span>
    </Appbar>
    <h3>Using <a href="https://baconipsum.com/json-api/" rel="noopener noreferrer" target="_blank">Bacon Ipsum</a> & <a href="https://material-ui.com/" rel="noopener noreferrer" target="_blank">Material UI Framework</a></h3>
    <hr />
  </div>
)

export default Header;