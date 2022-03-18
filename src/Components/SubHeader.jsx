import React from 'react';
import shootingStar from '../assets/shooting-star.svg';

function SubHeader() {
  return (
    <div>
      <h2>Wish Wallet</h2>
      <img className="shootingStar" src={shootingStar} alt="shooting star" />
    </div>
  );
}

export default SubHeader;
