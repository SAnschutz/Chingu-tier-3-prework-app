import React from 'react';

const Header = () => {
  return (
    <div class='text'>
      <header>
        <h2>Search by Sol and Camera</h2>
        <table>
          <tr>
            <td className='camera'>FHAZ</td>Front Hazard Avoidance Camera
            <td />
          </tr>
          <tr>
            <td>FHAZ</td>
            <td>Front Hazard Avoidance Camera</td>
          </tr>
          <tr>
            <td>NAVCAM</td>
            <td>Navigation Camera</td>
          </tr>
          <tr>
            <td>MAST</td>
            <td>Mast Camera</td>
          </tr>
          <tr>
            <td>CHEMCAM</td>
            <td>Chemistry and Camera Complex</td>
          </tr>
          <tr>
            <td>MAHLI</td>
            <td>Mars Hand Lens Imager</td>
          </tr>
          <tr>
            <td>MARDI</td>
            <td>Mars Descent Imager</td>
          </tr>
          <tr>
            <td>RHAZ</td>
            <td>Rear Hazard Avoidance Camera</td>
          </tr>
        </table>
      </header>
    </div>
  );
};

export default Header;
