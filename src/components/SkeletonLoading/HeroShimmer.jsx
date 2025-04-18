import up from "/assets/up.svg";
import down from "/assets/down.svg";

function HeroShimmer() {
    return (
        <div className="w-full">
            <div className="bg-custom-purple text-custom-white py-20 relative overflow-hidden">
                <div className="hidden lg:block w-1/2 absolute top-[-120px] left-0">
                    <img src={up} alt="" />
                </div>
                <div className="relative z-10 max-w-[90%] w-[90%] container mx-auto flex flex-col lg:flex-row items-center gap-5 mt-5 lg:px-5">

                    {/* Hero Text */}
                    <div className="w-[90%] mx-auto text-center lg:text-left lg:w-1/2 flex flex-col gap-5 justify-center items-center lg:items-start ">
                        <span className="text-md uppercase font-semibold text-gray-200">Featured Post</span>

                        <div className="w-full">
                            <span className="inline-block w-full h-12 gray shimmer"></span>
                            <span className="inline-block w-full h-12 gray shimmer"></span>
                            <span className="inline-block w-3/4 h-12 gray shimmer"></span>
                        </div>

                        <p className="w-full flex flex-col items-center gap-1">
                            <span className="inline-block w-11/12 h-5 gray shimmer"></span>
                            <span className="inline-block w-11/12 h-5 gray shimmer"></span>
                            <span className="inline-block w-10/12 h-5 gray shimmer"></span>
                            <span className="inline-block w-3/4 h-5 gray shimmer"></span>
                        </p>

                        <span className="inline-block w-24 h-8 gray shimmer"></span>
                    </div>

                    {/* Hero Image */}
                    <div className="w-[90%] gray shimmer h-[448px] mx-auto mt-8 md:mt-0 lg:w-1/2 image">

                    </div>
                </div>

                <div className="hidden lg:block w-1/2 absolute bottom-[-160px] right-[-190px] z-0">
                    <img src={down} alt="" />
                </div>
            </div>
        </div>
    );
}

export default HeroShimmer;