import { useSelector } from "react-redux";
import { Button, Logo } from "../index";
import { Link } from "react-router-dom";
import up from "/assets/up.svg";
import down from "/assets/down.svg";

function Footer() {

    const authStatus = useSelector((state) => state.auth.status);

    return (
        <footer className="w-full">
            <div>
                {!authStatus && <section className="w-full mt-20 relative bg-custom-purple px-10 md:px-32 py-24 overflow-hidden">
                    <div className="hidden lg:block w-1/2 absolute top-[-120px] left-0">
                        <img src={up} alt="" />
                    </div>
                    <div className="w-full md:w-[70%] lg:w-2/3 mx-auto relative z-10 flex flex-col justify-center items-center gap-7 text-center">
                        <h1 className="text-custom-white text-3xl md:text-4xl font-semibold font-sans ">Share your stories, explore new ones – click Get Started to join!</h1>
                         <Button className="text-custom-white border border-white">Get Started</Button>
                        <p className="text-white">Unlock a world of storytelling by signing up! Share your unique experiences, insights, and perspectives through your own blogs, while discovering fresh stories from others. Connect with a vibrant community</p>
                    </div>
                    <div className="hidden lg:block w-1/2 absolute bottom-[-160px] right-[-190px] z-0">
                        <img src={down} alt="" />
                    </div>
                </section>}
                <section className="w-full py-12">
                    <div className="w-[80%] mx-auto border-b-2 border-b-gray-400">
                        <div className="mx-auto flex flex-col justify-center items-center gap-5 mb-10">
                            <Logo />
                            <ul className="flex justify-between items-center gap-10 text-gray-600">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/blogs">Blogs</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                            <div className="flex justify-between items-center gap-5 text-2xl">
                                <a href="https://www.instagram.com/coder_nitin01/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://github.com/nitindiwakar123" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/nitin-diwakar-398483280" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-[80%] mx-auto pt-5">
                        <div className="mx-auto flex justify-between items-center text-sm text-gray-400 gap-10">
                        <p className="break-words text-start">Copyright Zarrin inc &copy; 2024 All Right Reserved</p>
                        <p className="break-words text-end">Developed By Nitin Diwakar</p>  
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
}

export default Footer;