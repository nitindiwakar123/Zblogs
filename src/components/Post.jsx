import { useNavigate, useParams } from "react-router-dom";
import databaseService from "../appwrite/databaseService/database";
import storageService from "../appwrite/storageService/storage";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useSelector, useDispatch } from "react-redux";
import { PostCard, Button, PostShimmer, Loader, SEO } from "./index";

function Post() {

    const [loading, setLoading] = useState(true);

    const [currentPost, setCurrentPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const { slug } = useParams();
    const navigate = useNavigate();
    const posts = useSelector((state) => state.post.posts);
    const userData = useSelector((state) => state.auth.userData);

    const author = currentPost && userData ? currentPost.userId === userData.$id : false;
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (slug) {
            setLoading(true);
            databaseService.getPost(slug)
                .then((post) => {
                    if (post) {
                        setCurrentPost(post);
                        setRelatedPosts(posts.filter((currPost) => currPost.category === post.category && currPost.$id != post.$id));
                    }
                })
                .catch((error) => {
                    console.log("Post.jsx :: useEffect :: getPost :: error: ", error);
                })
                .finally(() => setLoading(false));

        } else {
            navigate("/");
        }
    }, [slug, navigate]);

    const handleDelete = () => {
        setIsDeleting(true);
        databaseService.deletePost(currentPost.$id)
            .then(() => {
                storageService.deleteFile(currentPost.featuredImage);

                alert("Post has been deleted now go back!");
                navigate("/blogs");
            })
            .finally(() => setIsDeleting(false));
    }

    if (loading) {
        return <PostShimmer />
    }

    if (!currentPost) {
        return <h1>Post not found</h1>
    }

    return (
        <div className="w-full pt-14 pb-10 px-5 lg:px-20">
            <SEO
                title={currentPost.title}
                description={currentPost.caption.length > 160 ? currentPost.caption.slice(0, 157).trim() + "..." : currentPost.caption}
            />

            <div className="w-full mt-45 bg-transparent flex justify-center items-center">
                {isDeleting && <Loader />}
            </div>

            <div>
                <section className="w-full py-5 lg:px-12 mb-10">
                    <div className=" mx-auto flex flex-col justify-center items-start gap-5 text-start ">
                        <div className="flex justify-center items-center gap-10">
                            <span className="text-lg text-gray-700 font-bold font-sans">{currentPost.category}</span>
                            <span className="text-sm text-gray-400 font-semibold">{new Date(currentPost.$createdAt).toLocaleDateString()}</span>
                        </div>
                        <div>
                            <h1 className="text-4xl lg:5xl font-sans font-bold text-gray-800 leading-[1.2] lg:leading-[1.3] tracking-tight break-words">{currentPost.title}</h1>
                        </div>
                    </div>
                </section>
                <section className="w-full rounded-xl overflow-hidden mb-10">
                    <div className="w-full h-104">
                        <img className="w-full h-full object-cover" src={storageService.getFile(currentPost.featuredImage)} alt="" />
                    </div>
                </section>
                <section className="w-full">
                    <div className="w-[80%] mx-auto flex flex-col gap-5 break-words text-start tracking-tight text-balance">
                        {parse(currentPost.content)}
                    </div>
                </section>
                {author && <section className="w-full bg-gray-200 border border-gray-400 py-2 mt-5">
                    <div className="mx-auto flex justify-center items-center gap-5">
                        <Button
                            onClick={() => navigate(`/edit-post/${currentPost.$id}`)}
                            className="text-white hover:bg-violet-800"
                        >Edit</Button>
                        <Button onClick={handleDelete} className="text-white hover:bg-violet-800">Delete</Button>
                    </div>
                </section>}

                {(relatedPosts.length > 0) ? <section className="w-full mt-20">
                    <div className="flex flex-col gap-16">
                        <div className="w-full flex justify-between items-center">
                            <h2 className="text-4xl font-semibold font-poppins text-gray-900">Related Posts</h2>
                            <Button
                                bgColor="bg-custom-purple"
                                textColor="text-custom-white"
                                onClick={() => navigate("/blogs")}
                            >View All</Button>
                        </div>
                        <div className="w-[80%] mx-auto md:w-full grid grid-cols-1 lg:grid-cols-3 grid-flow-row justify-items-stretch items-stretch gap-10">
                            {relatedPosts?.map((post) => (
                                <PostCard key={post.$id} post={post} />
                            ))}
                        </div>
                    </div>
                </section> : null}
            </div>
        </div>
    );

}

export default Post;