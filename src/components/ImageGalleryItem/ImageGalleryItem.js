import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL, activeImages }) => {
  return (
    <li onClick={activeImages} className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        data-source={largeImageURL}
        src={webformatURL}
        alt="img"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  activeImages: PropTypes.func,
};
export default ImageGalleryItem;
