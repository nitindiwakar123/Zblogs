import blogImage from "/assets/images/about-banner.png";
import { AboutCard, SEO } from "../components";

function About() {
    const description = "Zarrin is a community-driven blog platform where everyone can share their stories, insights, and ideas. Discover diverse content, connect with other writers, and easily publish your own blogs—all in one place. Join us and be part of a world of shared knowledge and inspiration!";

    return (
        <div className="w-full py-10 px-5 lg:px-20">
            <SEO
                title="From Thoughts to Pages: A Community of Writers & Readers"
                description={description.slice(0, 157).trim() + "..."}
            />
            <section className="w-full mb-20">
                <div className="mx-auto text-center flex flex-col justify-center items-center gap-5">
                    <p className="text-lg uppercase text-gray-500 font-semibold font-mono">ABOUT US</p>
                    <h1 className="w-[90%] md:w-[80%] lg:w-[55%] mx-auto font-sans text-3xl lg:text-4xl font-semibold break-words tracking-tight leading-[1.2] lg:leading-[1.3] xl:leading-[1.5] text-center">From Thoughts to Pages: A Community of Writers & Readers</h1>
                    <p className="w-[80%] mx-auto text-gray-500 text-center text-balance break-words">Zarrin is a community-driven blog platform where everyone can share their stories, insights, and ideas. Discover diverse content, connect with other writers, and easily publish your own blogs—all in one place. Join us and be part of a world of shared knowledge and inspiration!</p>
                </div>
            </section>
            <section className="w-full rounded-xl overflow-hidden mb-20">
                <div className="w-full h-104">
                    <img className="w-full h-full object-cover" src={blogImage} alt="" />
                </div>
            </section>
            <section className="w-full">
                <div className="flex flex-col justify-center items-center gap-10">
                    <div className="w-full flex flex-col justify-center items-start gap-4">
                        <p className="uppercase text-lg font-sans font-bold text-gray-700">How it Works</p>
                        <h2 className="text-4xl font-semibold font-poppins text-gray-900">I will show you how our website works</h2>
                        
                    </div>
                    <div className="w-full grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-2">
                        <AboutCard
                            number="01"
                            heading="Effortless Blogging"
                            paragraph="Easily create and share your thoughts, stories, or insights using our simple, user-friendly editor. Whether you’re a seasoned writer or just starting, our platform empowers you to publish blogs effortlessly. With customizable formatting options and seamless publishing, it ensures your content looks professional and engaging. You don’t need technical skills—just your creativity and ideas. From drafts to final posts, the process is streamlined to save time while keeping quality intact. Start expressing yourself today with a blogging tool designed for simplicity and impact."
                        />

                        <AboutCard
                            number="02"
                            heading="Explore Content"
                            paragraph="Discover a treasure trove of blogs covering diverse topics written by creators from around the world. Whether you’re into travel, technology, lifestyle, or personal growth, there’s something here for everyone. Explore fresh perspectives, learn from insightful stories, and gain inspiration for your own ideas. Our dynamic content library is updated regularly, ensuring you’ll always find something new and engaging. Dive into thought-provoking articles, creative narratives, and expert advice while connecting with the voices behind them. Reading has never been so enriching!"
                        />
                        <AboutCard
                            number="03"
                            heading="Thriving Community"
                            paragraph="Join a vibrant and inclusive community of writers and readers where collaboration and connection thrive. Engage with others through comments, likes, and discussions, fostering meaningful relationships and shared learning. Whether you’re looking to find like-minded individuals, gain constructive feedback, or simply enjoy interacting with others’ work, this platform provides a supportive environment for all. Celebrate diverse ideas and cultures while sharing your own. Here, the community isn’t just an audience—it’s your network of friends, mentors, and fellow enthusiasts who inspire and grow with you."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;