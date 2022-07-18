import fetch from 'node-fetch';
import Head from 'next/head'; 
const SinglePost = props => {
    const { post } = props;
    return (
        <>
            {
                post ? (
                    <>
                        <Head>
                            <title>{post.title}</title>
                        </Head>
                        <h2>{post.title}</h2>
                        <p>{[post.body]}</p>
                    </>
                )
                    : <h2>Not</h2>
            }
        </>
    )
}
export async function getStaticPaths() {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let posts = await res.json();
    let paths = posts.map(post => {
        return { params: { id: post.id.toString() } }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    console.log(params);
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    let post = await res.json();
    return {
        props: {
            post
        }
    }
}

export default SinglePost;