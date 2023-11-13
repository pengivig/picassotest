import React, {useEffect, useRef, useState} from 'react';
import s from './PostsListPage.module.scss';
import {postAPI} from '../../services/PostService';
import {Preloader} from '../../components/common/Preloader/Preloader';
import {PostCard} from "../../components/PostCard/PostCard";

export const PostsListPage = () => {
    const [isFetchingDown, setIsFetchingDown] = useState(false)
    const [isFetchingUp, setIsFetchingUp] = useState(false)
    const [currentPostStart, setCurrentPostStart] = useState(0)

    const {data: posts, error, isLoading} = postAPI.useFetchPostsListQuery({limit: 7, start: currentPostStart});

    useEffect(() => {
        if (isFetchingDown) {
            setCurrentPostStart(prev => {
                return prev < 96 ? prev + 1 : prev
            })
            setIsFetchingDown(false)
        }
    }, [isFetchingDown])
    useEffect(() => {
        if (isFetchingUp) {
            setCurrentPostStart(prev => {
                return prev > 0 ? prev - 1 : prev
            })
            setIsFetchingUp(false)
        }
    }, [isFetchingUp])
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])
    const scrollHandler = (e: any): void => {
        if (e.target.documentElement.scrollTop < 50) {
            setIsFetchingUp(true)
        }
        if (e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - window.innerHeight < 50) {
            setIsFetchingDown(true)
            window.scrollTo(0, (e.target.documentElement.scrollHeight + e.target.documentElement.scrollTop));
        }
    }


    return (
        <div className={s.postListPage}>
            {posts && posts.map(p => <PostCard post={p} postNumber={p.id} key={p.id}/>)}
            {error && <div>Ошибка при запросе</div>}
            {(isLoading) && <Preloader/>}
        </div>)
}