import React, { useState } from 'react';

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div>
      <h2>Image Uploader</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ marginBottom: '10px' }}
      />

      {selectedImage && (
        <div>
          <h3>Selected Image:</h3>
          <img src={selectedImage} alt="Uploaded" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
