import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
const ImageGallery = ({ images, activeImages }) => {
  return (
    <ul className="ImageGallery">
      {images.map(img => (
        <ImageGalleryItem
          key={img.id}
          webformatURL={img.webformatURL}
          largeImageURL={img.largeImageURL}
          activeImages={activeImages}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  activeImages: PropTypes.func,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
};

export default ImageGallery;
