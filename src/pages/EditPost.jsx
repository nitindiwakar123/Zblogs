import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { PostForm, Container, SEO } from "../components";

function EditPost() {

    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const posts = useSelector((state) => state.post.posts);
    const description = "Zarrin is a community-driven blog platform where everyone can share their stories, insights, and ideas. Discover diverse content, connect with other writers, and easily publish your own blogs—all in one place. Join us and be part of a world of shared knowledge and inspiration!";
    useEffect(() => {
        const selectedPost = posts.find((currPost) => currPost.$id === slug);

        if (selectedPost) {
            setPost(selectedPost);
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [posts, slug]);

    if (!loading) {
        return (
            <Container className="w-full px-5 md:px-10 lg:px-20 py-2 bg-gray-200">
                <SEO
                    title="Edit Existing Post"
                    description={description.slice(0, 157).trim() + "..."}
                />
                <PostForm post={post} />
            </Container>
        );
    } else {
        return (
            <Container>
                <h1>Loading...</h1>
            </Container>
        )
    }
}

export default EditPost;