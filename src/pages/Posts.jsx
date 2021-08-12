import React, { useEffect, useRef, useState } from 'react';
import MySelect from '../components/UI/select/MySelect';
import { useObserver } from '../hooks/useObserver';
import PostService from './../API/PostService';
import PostFilter from './../components/PostFilter';
import PostForm from './../components/PostForm';
import PostsList from './../components/PostsList';
import MyButton from './../components/UI/button/MyButton';
import Loader from './../components/UI/Loader/Loader';
import MyModal from './../components/UI/MyModal/MyModal';
import Pagination from './../components/UI/paginate/Pagination';
import { useFetching } from './../hooks/useFetching';
import { usePosts } from './../hooks/usePosts';
import './../styles/App.css'
import { getPagesCount } from './../utils/pages';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef()
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page)
      setPosts([...posts, ...response.data])
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPagesCount(totalCount, limit))
    })

  useObserver(
    lastElement,
    page < totalPages,
    isPostLoading,
    () => setPage(page + 1))


  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit]);

  // callback
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className='App'>
      <MyButton
        style={{ marginTop: '30px' }}
        onClick={() => setModal(true)}
      >
        New Post
      </MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <MySelect 
      value={limit}
      onChange={value => setLimit(value)}
      defaultValue='Numbers of elements'
      options={[
        {value: 5, name: '5'},
        {value: 10, name: '10'},
        {value: 25, name: '25'},
        {value: -1, name: 'All'}
      ]}
      >

      </MySelect>
      {postError &&
        <h1>Some error ocured - {postError}</h1>
      }
      {!postError &&
        < PostsList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="JS posts"
        />}
      <div
        ref={lastElement}
        style={{ height: '20px', background: 'red' }}>
      </div>
      {isPostLoading &&
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Loader />
        </div>
      }
      <Pagination
        totalPages={totalPages}
        page={page}
        changePage={changePage} />
    </div>
  );
}

export default Posts;
