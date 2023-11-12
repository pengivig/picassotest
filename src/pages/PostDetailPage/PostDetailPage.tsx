import s from './PostDetailPage.module.scss'
import {PostDetail} from "../../components/PostDetail/PostDetail";
import {useParams} from "react-router-dom";
import {postAPI} from "../../services/PostService";
import {Preloader} from "../../components/common/Preloader/Preloader";

export const PostDetailPage = () => {
    const {id} = useParams()
    const {data: post, error, isLoading} = postAPI.useFetchPostQuery(+id!)
    return (
        <div className={s.postDetailPage__wrapper}>
            {post && <PostDetail post={post}/>}
            {error && <div>Ошибка при запросе</div>}
            {isLoading && <Preloader />}
        </div>
    )
}