import Link from 'next/link'
import HeadPost from './HeadPost'

export const PreviewPost = ({ post }) => {
    const {
        link,
        module: {meta},
    } = post

    return (
        <article>
            <HeadPost meta={meta} />
            <Link href={'/posts' + link}>
                <a>Read more →</a>
            </Link>
        </article>
    )
}

export default PreviewPost
