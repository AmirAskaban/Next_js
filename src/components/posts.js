import Link from 'next/link'

const PostsList = props => {
    return (
        <ul>
            {
                props.posts.map(post => {
                    return (
                        <li key={post.id}>
                            <Link href="/posts/[id]" as={`/posts/${post.id}`} >
                                <a>{post.title}</a>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default PostsList;