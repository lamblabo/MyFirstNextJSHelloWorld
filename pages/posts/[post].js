import Head from "next/head";

export default function post({ post }) {
    return (
        <>
            <Head>
                <title>POST {post.id}</title>
                <meta name="description" content={`POST(投稿)${post.id}`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1>POST {post.id} (dynamic rounting test)</h1>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </>
    );
}
  
export async function getServerSideProps({ params }) {
    const id = params.post;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    if (!Object.keys(post).length) {
      return {
        notFound: true,
      };
    }
    return { props: { post } };
}