import { useSelector } from "react-redux";
import { PostCard, BlogListShimmer, SEO } from "../components";
import { useEffect, useState } from "react";

function Blogs() {

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const allPosts = useSelector((state) => state.post.posts);

    useEffect(() => {
        setLoading(true);
        setPosts(allPosts);
        setLoading(false);
    }, [loading, posts]);

    if (loading || posts.length === 0) return (
        <div className="w-full py-10 px-5 lg:px-20">

            <SEO
                title="All Blogs"
                description="Find all blogs from here"
            />

            <section className="w-full mb-20">
                <div className="mx-auto text-center flex flex-col justify-center items-center gap-5">
                    <p className="text-lg uppercase text-gray-500 font-semibold font-mono">All Blogs</p>
                    <h1 className="w-[90%] md:w-[80%] lg:w-[55%] mx-auto font-sans text-3xl lg:text-4xl font-semibold break-words tracking-tight leading-[1.2] lg:leading-[1.3] xl:leading-[1.5] text-center">Find all blogs from here</h1>
                    <p className="w-[80%] mx-auto text-gray-500 text-center text-balance break-words"></p>
                </div>
            </section>

            <section className="w-full mb-5">
                <BlogListShimmer cards={9} />
            </section>
        </div>
    );

    return (
        <div className="w-full py-10 px-5 lg:px-20">
            <SEO
                title="All Blogs"
                description="Find all blogs from here"
            />
            <section className="w-full mb-20">
                <div className="mx-auto text-center flex flex-col justify-center items-center gap-5">
                    <p className="text-lg uppercase text-gray-500 font-semibold font-mono">All Blogs</p>
                    <h1 className="w-[90%] md:w-[80%] lg:w-[55%] mx-auto font-sans text-3xl lg:text-4xl font-semibold break-words tracking-tight leading-[1.2] lg:leading-[1.3] xl:leading-[1.5] text-center">Find all blogs from here</h1>
                    <p className="w-[80%] mx-auto text-gray-500 text-center text-balance break-words"></p>
                </div>
            </section>
            <section className="w-full mb-5">
                <div className="w-[80%] mx-auto md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row justify-items-stretch items-stretch gap-10">
                    {posts?.map((post) => (
                        <PostCard key={post.$id} post={post} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Blogs;