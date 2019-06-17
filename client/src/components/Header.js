import React from 'react';

const Header = () => {
  return (
    <div>
      <header>
        <h1>Mars Photos API</h1>
        <h2>Curiosity</h2>
        <h3>Cameras:</h3>
        <ul>
          <li>FHAZ -- Front Hazard Avoidance Camera</li>
          <li>NAVCAM -- Navigation Camera</li>
          <li>MAST -- Mast Camera</li>
          <li>CHEMCAM -- Chemistry and Camera Complex</li>
          <li>MAHLI -- Mars Hand Lens Imager</li>
          <li>MARDI -- Mars Descent Imager</li>
          <li>RHAZ -- Rear Hazard Avoidance Camera</li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
