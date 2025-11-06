import authService from "../../appwrite/authService/auth";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { Loading } from "../index";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LogoutBtn() {

    const authStatus = useSelector((state) => state.auth.status);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleLogout = () => {
        if (!authStatus) return;

        setIsLoggingOut(true);
        authService.logout()
            .then(() => {
                dispatch(logout());
                navigate("/");
            })
            .catch((error) => {
                console.log("Error in :: logout component :: handleLogout :: error: ", error);

            })
            .finally(() => setIsLoggingOut(false));
    }
    return (
        <>
            {isLoggingOut && <Loading />}
            <button
                className="text-gray-600 md:text-white bg-transparent md:bg-custom-purple flex justify-center items-center gap-2 md:hover:bg-violet-800 p-0 md:px-5 md:py-2 font-sans outline-none rounded-md transition-all duration-200 ease-linear"
                onClick={handleLogout}>
                Logout
                <i className="fa-solid fa-right-from-bracket"></i>
            </button>
        </>
    );
}

export default LogoutBtn;