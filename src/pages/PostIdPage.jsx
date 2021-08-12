import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getPostById(params.id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, errorCom] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(params.id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, []);
    const params = useParams()
    return (
        <div>
            <h1>Page of post with ID = {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div className={'post'}>{post.id}.{post.title}</div>
            }
            <h1>Comments:</h1>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(comm =>
                        <div style={{ marginTop: '10px' }} key={comm.id}>
                            <h5>
                                {comm.email}
                            </h5>
                            <div>
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
