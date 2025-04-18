import { Button, HeroShimmer } from "./index";
import { useState, useEffect } from "react";
import storageService from "../appwrite/storageService/storage";
import up from "/assets/up.svg";
import down from "/assets/down.svg";
import { useNavigate } from "react-router-dom";

function Hero({ posts }) {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [latestPost, setLatestPost] = useState(null);

    useEffect(() => {

        if (posts && posts.length > 0) {
            // Set the latest post only if there are posts in the array
            setLatestPost(posts[posts.length - 1]);
            setLoading(false);
        } else {
            // Show loading spinner or message if no posts are found
            setLoading(true);
        }
    }, [posts]);


    if (loading || !latestPost) {
        return <HeroShimmer />
    } else {
        return (
            <section className="w-full">
                <div className="bg-custom-purple text-custom-white py-20 relative overflow-hidden">
                    <div className="hidden lg:block w-1/2 absolute top-[-120px] left-0">
                        <img src={up} alt="" />
                    </div>
                    <div className="relative z-10 max-w-[90%] w-[90%] container mx-auto flex flex-col lg:flex-row items-center gap-5 lg:gap-0 mt-5 lg:px-5">

                        {/* Hero Text */}
                        <div className="w-[90%] mx-auto text-center lg:text-left lg:w-1/2 flex flex-col gap-5 justify-center items-center lg:items-start ">
                            <span className="text-md uppercase font-semibold text-gray-200">Featured Post</span>

                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold font-sans leading-[1.2] lg:leading-[1.3] xl:leading-[1.2] tracking-tight text-center lg:text-start break-words">
                                {latestPost.title}
                            </h1>

                            <div className="text-gray-200 text-md lg:pr-20 text-center lg:text-start break-words">
                                {latestPost.caption}
                            </div>

                            <Button
                                bgColor="bg-custom-white"
                                textColor="text-gray-900"
                                className="font-medium text-sm mt-4 px-6 py-3 rounded-lg shadow-md transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-gray-100 hover:text-gray-800"
                                onClick={() => navigate(`/post/${latestPost.$id}`)}
                            >
                                Read more
                            </Button>
                        </div>

                        {/* Hero Image */}
                        <div className="w-[90%] mx-auto mt-8 md:mt-0 lg:w-1/2 flex justify-end">
                            <div className="w-full lg:w-[90%] h-100 rounded-lg overflow-hidden">
                                <img
                                    src={storageService.getFile(latestPost.featuredImage)}
                                    alt={latestPost.title}
                                    className="w-full object-cover h-full shadow-lg"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block w-1/2 absolute bottom-[-160px] right-[-190px] z-0">
                        <img src={down} alt="" />
                    </div>
                </div>
            </section>

        );
    }
}

export default Hero;