import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
const ImageGallery = ({ images, activeImages }) => {
  console.log(images);
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

export default ImageGallery;
