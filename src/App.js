import React, { useState } from 'react';
import PostsList from './components/PostsList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 0', body: 'Description' },
    { id: 2, title: 'JavaScript 1', body: 'Description' },
    { id: 3, title: 'JavaScript 2', body: 'Description' }
  ]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title, body
    }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
  }



  return (
    <div className='App'>
      <form>
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Post name" />
        <MyInput
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text"
          placeholder="Post Description" />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      < PostsList posts={posts} title="JS posts" />
    </div>
  );
}

export default App;
