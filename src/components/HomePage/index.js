// == Import : npm
import React from 'react';

// == Import : local
import './homepage.scss';
// == Composant
const HomePage = () => (
  <div id="homepage">
    <div className="pageLeft">
      <div className="pageLeft-title">latest</div>
      <div className="actuItem">
        <div className="actuItem-title">Explorer</div>
        <div className="actuItem-content">
          Papa nul is remote and Then there's it's Isolated north coast
        </div>       
      </div>
      <div className="actuItem">
        <div className="actuItem-title">Explorer</div>
        <div className="actuItem-content">
          Papa nul is remote and Then there's it's Isolated north coast
        </div>       
      </div>
    </div>

    <div className="pageRight">
      <div className="pageRight-title">
        <h1>Five reasons to visit Lviv, Ukraine</h1>
        <div className="pageRight-author">2nd ego - by Earl Blue</div>
      </div>
      <div className="pageRight-content">
        <div className="pageRight-content-article">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit minima, neque suscipit reprehenderit nemo provident recusandae earum incidunt, at quaerat accusamus sint eos ipsa doloremque velit consequatur, beatae architecto quis. Nemo iure a, amet molestias in cumque, magni earum tenetur rem nam, illo dolor eligendi blanditiis minima odio doloremque eos.
        </div>
        <div className="pageRight-content-image">
          <img src="src/assets/images/lviv.jpg" alt="lviv" />
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default HomePage;
