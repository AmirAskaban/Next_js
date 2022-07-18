import fetch from 'node-fetch';
import Navbar from '../components/navbar';
import PostsList from '../components/posts';
import Head from 'next/head'; 
const Home = props => {
    return (
        <>
            <Head>
                <title>
                    AmirAskaban
                </title>
            </Head>
            <h2>Hello Roocket</h2>
            <Navbar />
            <h2>Blog Posts</h2>
            <PostsList posts={props.posts} />
        </>
    )
}

export async function getStaticProps() {

    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await res.json();


    return {
        props: {
            posts
        }
    }
}


export default Home;
