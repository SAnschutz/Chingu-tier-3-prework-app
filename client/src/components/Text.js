import React from 'react';

const Header = () => {
  return (
    <div className='text'>
      <header>
        <h2>Search by Sol and Camera</h2>
        <table>
          <tbody>
            <tr>
              <td className='camera'>FHAZ</td>
              <td className='description'>Front Hazard Avoidance Camera</td>
            </tr>
            <tr>
              <td className='camera'>RHAZ</td>
              <td className='description'>Rear Hazard Avoidance Camera</td>
            </tr>
            <tr>
              <td className='camera'>NAVCAM</td>
              <td className='description'>Navigation Camera</td>
            </tr>
            <tr>
              <td className='camera'>MAST</td>
              <td className='description'>Mast Camera</td>
            </tr>
            <tr>
              <td className='camera'>CHEMCAM</td>
              <td className='description'>Chemistry and Camera Complex</td>
            </tr>
            <tr>
              <td className='camera'>MAHLI</td>
              <td className='description'>Mars Hand Lens Imager</td>
            </tr>
            <tr>
              <td className='camera'>MARDI</td>
              <td className='description'>Mars Descent Imager</td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
};

export default Header;
