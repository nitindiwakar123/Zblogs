import {BlogListShimmer} from "../index";

function PostShimmer() {
    return (
        <div className="w-full pt-14 pb-10 px-5 lg:px-20">
            <div>
                <section className="w-full py-5 lg:px-12 mb-10">
                    <div className=" mx-auto flex flex-col justify-center items-start gap-5 text-start ">
                        <div className="flex justify-center items-center gap-10">
                            <span className="inline-block w-56 h-5 gray shimmer"></span>
                            <span className="inline-block w-32 h-5 gray shimmer"></span>
                        </div>
                        <div className="w-full">
                            <h1 className="w-3/4 h-12 gray shimmer"></h1>
                        </div>
                    </div>
                </section>
                <section className="w-full rounded-xl overflow-hidden mb-10">
                    <div className="w-full h-104 gray shimmer"></div>
                </section>
                <section className="w-full">
                    <div className="w-[80%] mx-auto flex flex-col gap-5 break-words text-start tracking-tight text-balance">
                       <p className="w-full">
                        <span className="inline-block w-full h-4 gray shimmer"></span>
                        <span className="inline-block w-full h-4 gray shimmer"></span>
                        <span className="inline-block w-full h-4 gray shimmer"></span>
                        <span className="inline-block w-full h-4 gray shimmer"></span>
                        <span className="inline-block w-full h-4 gray shimmer"></span>
                       </p>
                    </div>
                </section>
                
                <section className="w-full mt-20">
                    <div className="flex flex-col gap-16">
                        <div className="w-full flex justify-between items-center">
                            <h2 className="text-4xl font-semibold font-poppins text-gray-900">Related Posts</h2>
                            <span
                                bgColor="bg-custom-purple"
                                textColor="text-custom-white"
                            >View All</span>
                        </div>
                        <BlogListShimmer cards={3} />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default PostShimmer;