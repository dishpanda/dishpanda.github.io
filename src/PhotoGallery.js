import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./Photos";

const PhotoGallery = () => {
  return (
    <div className="info">
      <Gallery photos={photos} />
    </div>
  );
};

export default PhotoGallery;
