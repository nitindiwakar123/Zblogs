import { useSelector } from "react-redux";
import { Button } from "../index";
import { useNavigate } from "react-router-dom";

function CreatePostBtn({
    className = "",
}) {

    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    if (authStatus) {
        return (
            <button
                className="text-gray-600 md:text-white bg-transparent md:bg-custom-purple flex justify-center items-center gap-2 md:hover:bg-violet-800 p-0 md:px-5 md:py-2 font-sans outline-none rounded-md transition-all duration-200 ease-linear"
                onClick={() => navigate("/create-post")}
            >
                Create
                <i className="fa-solid fa-plus border border-white p-1 rounded"></i>
            </button>
        )
    } else {
        return null
    }
}

export default CreatePostBtn;