import { Container, Hero, PostCard, Button, BlogListShimmer, HeroShimmer, SEO } from "../components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Home() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const allPosts = useSelector((state) => state.post.posts);
    const description = "Zarrin is a community-driven blog platform where everyone can share their stories, insights, and ideas. Discover diverse content, connect with other writers, and easily publish your own blogs—all in one place. Join us and be part of a world of shared knowledge and inspiration!";

    useEffect(() => {
        setLoading(true);
        setPosts(allPosts);
        setLoading(false);
    }, [loading, posts]);


    if (loading || posts.length === 0) return (
        <div className="w-full flex flex-col">
            <SEO
                title="Zblogs Blogs"
                description={description.slice(0, 157).trim() + "..."}
            />
            
            <Container>
                <HeroShimmer />
            </Container>

            <Container width="w-full md:w-[80%]" className="mx-auto mt-20 px-5 md:px-0">
                <div className="flex flex-col gap-16">
                    <div className="w-full flex justify-between items-center">
                        <h2 className="text-4xl font-semibold font-poppins text-gray-900">Recent Posts</h2>
                        <Button
                            bgColor="bg-custom-purple"
                            textColor="text-custom-white"
                            className="hover:bg-violet-800"
                            onClick={() => navigate("/blogs")}
                        >View All</Button>
                    </div>

                    <BlogListShimmer cards={3} />

                </div>
            </Container>

            <Container width="w-full md:w-[80%]" className="mx-auto mt-20 px-5 md:px-0">
                <div className="flex flex-col gap-16">
                    <div className="w-full flex justify-between items-center">
                        <h2 className="text-4xl font-semibold font-poppins text-gray-900">Science & Technology</h2>
                        <Button
                            bgColor="bg-custom-purple"
                            textColor="text-custom-white"
                            className="hover:bg-violet-800"
                            onClick={() => navigate("/blogs")}
                        >View All</Button>
                    </div>

                    <BlogListShimmer cards={3} />

                </div>
            </Container>

            <Container width="w-full md:w-[80%]" className="mx-auto mt-20 px-5 md:px-0">
                <div className="flex flex-col gap-16">
                    <div className="w-full flex justify-between items-center">
                        <h2 className="text-4xl font-semibold font-poppins text-gray-900">World Affairs</h2>
                        <Button
                            bgColor="bg-custom-purple"
                            textColor="text-custom-white"
                            className="hover:bg-violet-800"
                            onClick={() => navigate("/blogs")}
                        >View All</Button>
                    </div>

                    <BlogListShimmer cards={3} />
                </div>
            </Container>


        </div>
    );


    return (
        <div className="w-full flex flex-col">
            <Container>
                <Hero posts={posts} />
            </Container>

            <Container width="w-full md:w-[80%]" className="mx-auto mt-20 px-5 md:px-0">
                <div className="flex flex-col gap-16">
                    <div className="w-full flex justify-between items-center">
                        <h2 className="text-4xl font-semibold font-poppins text-gray-900">Recent Posts</h2>
                        <Button
                            bgColor="bg-custom-purple"
                            textColor="text-custom-white"
                            className="hover:bg-violet-800"
                            onClick={() => navigate("/blogs")}
                        >View All</Button>
                    </div>
                    <div className="w-[80%] mx-auto md:w-full grid grid-cols-1 lg:grid-cols-3 grid-flow-row justify-items-stretch items-stretch gap-10">
                        
                        {posts?.map((post, index) => {
                            if (index > posts.length - 4) {
                                return <PostCard key={index} post={post} />; // Ensure to return PostCard here
                            }
                            return null; // Return null for items that don't meet the condition
                        })}
                    </div>
                </div>
            </Container>

            <Container width="w-full md:w-[80%]" className="mx-auto mt-20 px-5 md:px-0">
                <div className="flex flex-col gap-16">
                    <div className="w-full flex justify-between items-center">
                        <h2 className="text-4xl font-semibold font-poppins text-gray-900">Science & Technology</h2>
                        <Button
                            bgColor="bg-custom-purple"
                            textColor="text-custom-white"
                            className="hover:bg-violet-800"
                            onClick={() => navigate("/blogs")}
                        >View All</Button>
                    </div>
                    <div className="w-[80%] mx-auto md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row justify-items-stretch items-stretch gap-10">
                        {posts?.map((post, index) => {

                            if (post.category === "Science & Technology") {
                                return <PostCard key={index} post={post} />; // Ensure to return PostCard here
                            }
                            return null; // Return null for items that don't meet the condition
                        })}
                    </div>
                </div>
            </Container>

            <Container width="w-full md:w-[80%]" className="mx-auto mt-20 px-5 md:px-0">
                <div className="flex flex-col gap-16">
                    <div className="w-full flex justify-between items-center">
                        <h2 className="text-4xl font-semibold font-poppins text-gray-900">World Affairs</h2>
                        <Button
                            bgColor="bg-custom-purple"
                            textColor="text-custom-white"
                            className="hover:bg-violet-800"
                            onClick={() => navigate("/blogs")}
                        >View All</Button>
                    </div>
                    <div className="w-[80%] mx-auto md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row justify-items-stretch items-stretch gap-10">
                        {posts?.map((post, index) => {

                            if (post.category === "World Affairs") {
                                return <PostCard key={index} post={post} />; // Ensure to return PostCard here
                            }
                            return null; // Return null for items that don't meet the condition
                        })}
                    </div>
                </div>
            </Container>


        </div>
    );
}

export default Home;