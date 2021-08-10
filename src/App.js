import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostsList from './components/PostsList';
import MySelect from './components/UI/select/MySelect';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 0', body: 'Description' },
    { id: 2, title: 'NJavaScript 1', body: 'ADescription' },
    { id: 3, title: 'BJavaScript 2', body: 'BDescription' }
  ]);

  // callback
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const [selectedSort, setSelectedSort] = useState('');

  const sortProps = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div><MySelect
        defaultValue="Sort"
        options={[
          { value: 'title', name: 'By name' },
          { value: 'body', name: 'By description' }
        ]}
        value={selectedSort}
        onChange={sortProps}
      /></div>
      {posts.length
        ? < PostsList remove={removePost} posts={posts} title="JS posts" />
        : <h1 style={{ textAlign: 'center' }}> Post list is Empty</h1>}

    </div>
  );
}

export default App;
