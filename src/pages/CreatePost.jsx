import { Container, PostForm, SEO } from "../components";

function CreatePost() {
    const description = "Zarrin is a community-driven blog platform where everyone can share their stories, insights, and ideas. Discover diverse content, connect with other writers, and easily publish your own blogs—all in one place. Join us and be part of a world of shared knowledge and inspiration!";

    return (
        <Container className="px-5 md:px-10 lg:px-20 py-2 bg-gray-200">
            <SEO
                title="Create a New Post"
                description={description.slice(0, 157).trim() + "..."}
            />

            <div className="w-full flex flex-col justify-center items-center gap-5">
                <div className="w-full text-md font-poppins font-semibold text-gray-500">
                    <h1>Create a New Post</h1>
                </div>
                <div className="w-full">
                    <PostForm />
                </div>
            </div>
        </Container>
    );
}

export default CreatePost;