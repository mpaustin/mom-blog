import PreviewPost from '../components/PreviewPost'
import { posts } from '../getAllPosts'

export default function AllPostsPage() {

    let arrPosts = []
    posts.forEach(post => {
        arrPosts.push(
            <PreviewPost key={post.link} post={post} />
        )
    });

    return (
        <>
            All posts!
            { arrPosts }
        </>
    )
}