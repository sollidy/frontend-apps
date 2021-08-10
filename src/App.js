import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostsList from './components/PostsList';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 0', body: 'Description' },
    { id: 2, title: 'JavaScript 1', body: 'Description' },
    { id: 3, title: 'JavaScript 2', body: 'Description' }
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }



  return (
    <div className='App'>
      <PostForm create={createPost} />
      < PostsList posts={posts} title="JS posts" />
    </div>
  );
}

export default App;
