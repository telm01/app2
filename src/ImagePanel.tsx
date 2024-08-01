import React from 'react';
import './csss/ImagePanel.css';

interface ImagePanelProps {
  title: string;
  image: string;
}

const ImagePanel: React.FC<ImagePanelProps> = ({ title, image }) => {
  return (
    <div className="Image-panel">
      <a><img src={image} alt="" /></a> 
    </div>
  );
};

export default ImagePanel;