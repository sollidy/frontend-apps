import React, { useEffect, useState } from 'react';
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
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page)
      setPosts(response.data)
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPagesCount(totalCount, limit))
    })

  useEffect(() => {
    fetchPosts(limit, page)
  }, []);

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
    fetchPosts(limit, page)
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
      {postError &&
        <h1>Some error ocured - {postError}</h1>
      }
      {isPostLoading
        ? <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Loader />
        </div>
        : !postError &&
        < PostsList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="JS posts"
        />
      }
      <Pagination
        totalPages={totalPages}
        page={page}
        changePage={changePage} />
    </div>
  );
}

export default Posts;
