import s from './PostsListPage.module.scss'
import {PostsList} from "../../components/PostsList/PostsList";

export const PostsListPage = () => {
    return (
        <div className={s.postListPage}>
            <PostsList />
        </div>
    )
}