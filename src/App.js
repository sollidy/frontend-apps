import React, { useMemo, useState } from 'react';
import PostForm from './components/PostForm';
import PostsList from './components/PostsList';
import MyInput from './components/UI/input/MyInput';
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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  const sortedPosts = useMemo(() => {
    console.log('Use getSortedPosts')
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  // callback
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  const sortProps = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Search...'
        />
        <MySelect
          defaultValue="Sort"
          options={[
            { value: 'title', name: 'By name' },
            { value: 'body', name: 'By description' }
          ]}
          value={selectedSort}
          onChange={sortProps}
        /></div>
      {sortedAndSearchedPosts.length
        ? < PostsList remove={removePost} posts={sortedAndSearchedPosts} title="JS posts" />
        : <h1 style={{ textAlign: 'center' }}> Post list is Empty</h1>}

    </div>
  );
}

export default App;
