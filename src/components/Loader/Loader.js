import React from 'react';
import Spiner from 'react-loader-spinner';

const Loader = () => {
  return (
    <Spiner
      type="Puff"
      color="#00BFFF"
      height={70}
      width={70}
      timeout={3000} //3 secs
    />
  );
};

export default Loader;
