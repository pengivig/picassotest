import s from "./PostDetail.module.scss";
import {LinkButton} from "../common/LinkButton/LinkButton";
import React from "react";
import {NavLink} from "react-router-dom";

interface PostDetailProps {
    id: string
}

export const PostDetail: React.FC<PostDetailProps> = ({id}) => {
    const data = {
        userId: 3,
        id: 3,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nullaest rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nullaest rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }
    return (
        <div className={s.postDetail__wrapper}>
            {/*<img src={avatar} alt={'#'}/>*/}
            <span className={s.PostDetail__number}>{id}</span>
            <div className={s.PostDetail__title}>
                <h3>{data.title}</h3>
            </div>
            <div className={s.postDetail__content}>
                <p>{data.body}</p>
            </div>
            <NavLink to={'/'} style={{}}><LinkButton route={"back"}/></NavLink>
        </div>
    )

}
