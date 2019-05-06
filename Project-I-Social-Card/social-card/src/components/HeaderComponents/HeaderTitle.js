import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    return (
      <div >
        <div>
          <h1>Lambda School</h1>
          <span className="time-stamp">('01/27/2999')</span>
          <HeaderContent />
        </div>
      </div>
    );
  };
  
  export default HeaderTitle;
  