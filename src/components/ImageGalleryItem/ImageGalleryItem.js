import React from 'react';

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

export default ImageGalleryItem;
