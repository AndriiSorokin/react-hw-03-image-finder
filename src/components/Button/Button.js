import React from 'react';

const Button = ({ searchImages }) => {
  return (
    <button className="Button btn" onClick={searchImages} type="submit">
      Load more
    </button>
  );
};

export default Button;
