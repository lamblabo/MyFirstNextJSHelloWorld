import Link from "next/link";
import Topbar from '../../components/topbar'

export default function index({ posts }) {
    return (
        <>
            <Topbar />
            <div className="container-sm">
                <h1>POST List(router & fetch test + フォントテスト)</h1>
                <ul className="list-group">
                    {posts.map((post) => {
                        return (
                            <li className="list-group-item" key={post.id}>
                                <Link href={`/posts/${post.id}`}>
                                    <a>{post.title}</a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.json();
    // console.log(posts);
    return { props: { posts } };
}