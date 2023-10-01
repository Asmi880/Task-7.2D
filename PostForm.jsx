import React, { useState } from 'react';
import './Post.css';
import QuestionSection from './Question';
import ArticleSection from './Article';

function PostForm() {
  const [selectedType, setSelectedType] = useState('');
  const [questionComponent, setQuestionComponent] = useState(null);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    if (event.target.value === 'Question') {
      console.log("Question has been clicked");
      setQuestionComponent(<QuestionSection />);
    } else if (event.target.value === 'Article') {
      console.log("Article has been clicked");
      setQuestionComponent(<ArticleSection />);
    }
  };

  return (
    <div>
      <div className="post-form">
        <div className="label">New Post</div>
        <div className="input-group">
          <label className="select-label">Select Post Type:</label>
          <div className="radio-group">
            <input
              type="radio"
              id="question"
              name="postType"
              value="Question"
              onChange={handleTypeChange}
            />
            <label htmlFor="question">Question</label>
            <input
              type="radio"
              id="article"
              name="postType"
              value="Article"
              onChange={handleTypeChange}
            />
            <label htmlFor="article">Article</label>
          </div>
        </div>
        <hr />
        <hr />
      </div>
      {questionComponent}
    </div>
  );
}

export default PostForm;
