import React from 'react';
import './Question.css';

function QuestionSection() {
  return (
    
    <div className="questionSection">
      <label className="questionLabel">What do you want to ask or share</label>
      <div className='input-container'>
        <label className="Title-label">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Start your question with how, what,why,etc."
          className="title-input"
        />
      </div>
      <hr/>
      <label className='problem-label'>Describe your Problem</label>
      <textarea
        id="problem"
        className="problem-input"
        rows="20"
        cols="215"
      />
      <hr/>
      <div className='tags-area'>
      <label className='tags'>Tags</label>
      <input
          type="text"
          id="tags"
          placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
          className="tags-input"
        />
        </div>
        <button className="post-button">Post</button>
      </div>
    
  );
}

export default QuestionSection;
