import React, {useEffect, useState} from 'react';
import s from './PostsListPage.module.scss';
import {postAPI} from '../../services/PostService';
import {Preloader} from '../../components/common/Preloader/Preloader';
import {FixedSizeList, VariableSizeList as List} from 'react-window';
import {PostCard} from "../../components/PostsList/PostCard/PostCard";
import {PostsList} from "../../components/PostsList/PostsList";
import AutoSizer from "react-virtualized-auto-sizer";


let items = {}
let requestCache = {}



export const PostsListPage = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchPostsListQuery(
        5
    );

    const Row = ({index, style}: { index: number, style: React.CSSProperties }) => (
        <div style={style}>
            <PostCard post={posts![index]} postNumber={index + 1}/>
        </div>

    )

    return (
        <div className={s.postListPage}>
            {posts && <PostsList posts={posts}/> }
            {error && <div>Ошибка при запросе</div>}
            {(isLoading) && <Preloader/>}
        </div>)
}