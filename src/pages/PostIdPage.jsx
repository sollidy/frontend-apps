import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading] = useFetching(async (id) => {
        const response = await PostService.getPostById(params.id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(params.id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const params = useParams()
    return (
        <div className='App item__margin__top'>
            <h1>Post.{params.id}</h1>
            {isLoading
                ? <div
                    style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Loader />
                </div>
                : <h3 style={{ alignItems: 'flex-start' }} className={'post'}>{post.title}</h3>
            }
            <h1 className='item__margin__top'>Comments:</h1>
            {isComLoading
                ? <div
                    style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Loader />
                </div>
                : <div>
                    {comments.map(comm =>
                        <div className='item__margin__top' key={comm.id}>
                            <div style={{ flexDirection: 'column', alignItems: 'flex-start' }} className='post'>
                                <b>{comm.email}</b>
                                {comm.body}
                            </div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
}

export default PostIdPage;
