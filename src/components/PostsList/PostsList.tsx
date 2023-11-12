import {PostCard} from "./PostCard/PostCard"
import s from './PostsList.module.scss'
import {postAPI} from "../../services/PostService";
import {Post} from "../../interfaces/post";

interface PostsListProps {
    posts: Post[]
}

export const PostsList: React.FC<PostsListProps> = ({posts}) => {

    return (
        <div className={s.postLiist__wrap}>
            {posts && posts.map(p => <PostCard post={p} postNumber={posts.indexOf(p)+1}/>)}
        </div>
    )
}