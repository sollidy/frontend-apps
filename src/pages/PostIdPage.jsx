import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
    const [comments, setComments] = useState([]);
    const [fetchComments, isComLoading] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(params.id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchComments(params.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const params = useParams()
    return (
        <div className='App item__margin__top'>
            <h1 className='item__margin__top'>#{params.id} Post Comments:</h1>
            {isComLoading
                ? <div style={{ marginTop: '20px' }}>
                    <Loader />
                </div>
                : <div>
                    {comments.map(comm =>
                        <div className='item__margin__top' key={comm.id}>
                            <div style={{ flexDirection: 'column', alignItems: 'flex-start' }} className='post'>
                                <p><b>{comm.email}: </b>
                                    {comm.body}</p>
                            </div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
}

export default PostIdPage;
