import Searchbar from "./Searchbar";
import {Routes, Route} from "react-router-dom";
import Post from "./PostForm";
import React from "react";
import Footer from './Footer';
import Profile from "./Profile";
import './App.css';
import QuestionAnswers from "./QuestionAnswers";
import Home from "./Home";
import PostForm from './PostForm';
import firebase from "./firebase";

import '@firebase/firestore'


function App() {
  return (
    <div className="App">
      <PostForm />
      
 
    </div>
  );
}

export default App;
