import s from "./PostDetail.module.scss";
import {LinkButton} from "../common/LinkButton/LinkButton";
import React from "react";
import {NavLink} from "react-router-dom";
import {postAPI} from "../../services/PostService";
import {Post} from "../../interfaces/post";

interface PostDetailProps {
    post: Post
}

export const PostDetail: React.FC<PostDetailProps> = ({post}) => {
    return (
        <div className={s.postDetail__wrapper}>
            {/*<img src={avatar} alt={'#'}/>*/}
            <span className={s.PostDetail__number}>{post.id}</span>
            <div className={s.PostDetail__title}>
                <h3>{post.title}</h3>
            </div>
            <div className={s.postDetail__content}>
                <p>{post.body}</p>
            </div>
            <NavLink to={'/'} style={{}}><LinkButton route={"back"}/></NavLink>
        </div>
    )

}
