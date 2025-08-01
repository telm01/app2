import React from 'react';
import './csss/ImagePanel.css';

interface ImagePanelProps {
  title: string;
  image: string;
  description1:string;
}

const ImagePanel: React.FC<ImagePanelProps> = ({ title, image , description1 }) => {
  return (
    <div className="Image-panel">
      <a><img src={image} alt="" />{title}
      </a> 
      <a>{description1}</a>
    </div>
  );
};

export default ImagePanel;