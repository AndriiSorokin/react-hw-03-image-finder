import React from 'react';

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  console.log(webformatURL);
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={webformatURL} />
    </li>
  );
};

export default ImageGalleryItem;
