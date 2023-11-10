import {PostCard} from "./PostCard/PostCard"
import s from './PostsList.module.scss'


export const PostsList = () => {

    const postsArr = [
        {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 1,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
    ]

    return (
        <div className={s.postLiist__wrap}>
            PostList
            {postsArr.map(p => <PostCard
                                                                userId={p.userId}
                                                                id={p.id}
                                                                title={p.title}
                                                                body={p.body}
                                                                postNumber={postsArr.indexOf(p)}/>)}
        </div>
    )
}