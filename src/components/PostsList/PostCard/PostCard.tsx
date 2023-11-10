import React from "react";
import {Post} from "../../../interfaces/post";
import s from './PostCard.module.scss'

export const PostCard: React.FC<Post> = ({id, userId, title, body, postNumber}) => {

    return (
        <div className={s.postCard__wrapper}>
            <span className={s.postCard__number}>{postNumber}</span>
            <div className={s.postCard__title}>
                <h3>{title}</h3>
            </div>
            <div className={s.postCard__content}>
                <p>{body}</p>
            </div>
        </div>
    )
}