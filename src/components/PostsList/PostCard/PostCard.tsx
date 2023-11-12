import React from "react";
import {Post} from "../../../interfaces/post";
import s from './PostCard.module.scss'
import avatar1 from '../../../assets/avatar1.png'
import avatar2 from '../../../assets/avatar2.png'
import avatar3 from '../../../assets/avatar3.png'
import avatar4 from '../../../assets/avatar4.png'
import avatar5 from '../../../assets/avatar5.png'
import {LinkButton} from "../../common/LinkButton/LinkButton";
import { NavLink} from "react-router-dom";

interface  PostCardProps {
    post: Post,
    postNumber: number

}
export const PostCard: React.FC<PostCardProps> = ({postNumber, post: {id, userId, title, body}}) => {

    let avatar = ''
    switch (userId) {
        case 1 || 6:
            avatar = avatar1
            break
        case 2 || 7:
            avatar = avatar2
            break
        case 3 || 8 :
            avatar = avatar3
            break
        case 4 || 9:
            avatar = avatar4
            break
        case 5 || 10:
            avatar = avatar5
    }

    return (
        <div className={s.postCard__wrapper}>
            <img src={avatar} alt={'#'}/>
            <span className={s.postCard__number}>{postNumber}</span>
            <div className={s.postCard__title}>
                <h3>{title}</h3>
            </div>
            <div className={s.postCard__content}>
                <p>{body}</p>

            </div>
            <NavLink style={{}} to={`/post/${id}`}><LinkButton route={'toPost'}/></NavLink>
        </div>
    )
}