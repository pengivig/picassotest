import s from './PostDetailPage.module.scss'
import {PostDetail} from "../../components/PostDetail/PostDetail";
import {useParams} from "react-router-dom";

export const PostDetailPage = () => {
    const {id} = useParams()
    return (
        <div className={s.postDetailPage__wrapper}>
            {id && <PostDetail id ={id}/>}
        </div>
    )
}