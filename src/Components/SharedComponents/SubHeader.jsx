import React from 'react';
import PropTypes from 'prop-types';
import shootingStar from '../../assets/shooting-star-yellow.png';

function SubHeader({ child }) {
  return (
    <div className="subHeader">
      <div className="starAndTitle">
        <img className="shootingStar" src={shootingStar} alt="shooting star" />
        <h2>Wish Wallet</h2>
      </div>
      <div className="btnFixedArea">
        {child}
      </div>
    </div>
  );
}

export default SubHeader;

SubHeader.propTypes = {
  child: PropTypes.element,
};

SubHeader.defaultProps = {
  child: null,
};
