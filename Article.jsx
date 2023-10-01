import React, { useState, useRef } from 'react';
import './Article.css';

function ArticleSection() {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUploadButtonClick = () => {
    if (image) {
      console.log("Uploading image:", image);
    } else {
      alert("No image selected for upload.");
    }
  };

  const handleBrowseButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="questionSection">
      <label className="questionLabel">What do you want to ask or share</label>
      <div className='input-container'>
        <label className="Title-label">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter a descriptive title"
          className="title-input"
        />
      </div>
      <hr />
      <div className='image-upload-container'>
        <label className='image-label'>Add an image:</label>
        <div className='image-input-container'>
          <div className='image-upload'>
            <input
              type="file"
              accept="image/*"
              id="image"
              onChange={handleImageUpload}
              ref={fileInputRef} 
              style={{ display: 'none' }} 
            />
            <span className="image-name">{image ? image.name : ''}</span>
          </div>
          <div className='image-buttons'>
            <button className="image-browse-button" onClick={handleBrowseButtonClick}>Browse</button>
            <button className="image-upload-button" onClick={handleUploadButtonClick}>Upload</button>
          </div>
        </div>
        <div className="image-placeholder">
        </div>
      </div>
      <hr />
      <label className='abstract-label'>Abstract</label>
      <textarea
        id="problem"
        className="abstract-input"
        placeholder='Enter a 1-paragraph abstract'
        rows="7"
        cols="5"
      />
      <hr />
      <label className='abstract-text-label'>Abstract Text</label>
      <textarea
        id="problem"
        placeholder='Enter a 1-paragraph abstract'
        className="abstract-text-input"
        rows="7"
      />
      <hr />
      <div className='tags-area'>
        <label className='tags'>Tags</label>
        <input
          type="text"
          id="tags"
          placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
          className="tags-input"
          cols="10"
        />
      </div>
      <button className="post-button">Post</button>
    </div>
  );
}

export default ArticleSection;
