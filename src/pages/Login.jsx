import { Login as LoginCompo, Container, SEO } from "../components";
import authImage from "/assets/images/authImg.png";

function Login() {
    const description = "Zarrin is a community-driven blog platform where everyone can share their stories, insights, and ideas. Discover diverse content, connect with other writers, and easily publish your own blogs—all in one place. Join us and be part of a world of shared knowledge and inspiration!";
    return (
        <Container className="bg-custom-white-2 py-10">
            <SEO
                title="User Login"
                description={description.slice(0, 157).trim() + "..."}
            />
            <div className="w-full md:grid md:grid-cols-2 md:justify-items-center md:items-center px-5 md:px-20">
                <div className="hidden md:block w-[80%] h-[80%]">
                    <img className="w-full h-full object-contain" src={authImage} alt="" />
                </div>
                <div className="w-full border-2 border-gray-300 border-opacity-60 shadow-md">
                    <LoginCompo />
                </div>
            </div>
        </Container>
    );
}

export default Login;