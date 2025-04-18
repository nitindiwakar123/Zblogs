import authService from "../appwrite/authService/auth";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { Input, Button, Loader } from "./index";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Signup() {

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [isSigninUp, setIsSigninUp] = useState(false);

    const create = async (data) => {
        setIsSigninUp(true);
        try {
            setError("");
            const user = await authService.createAccount(data);
            if (user) {
                const userData = await authService.getCurrentUser();
                if (userData) {

                    dispatch(login({ userData: userData }));
                    navigate("/");
                }
            }
        } catch (error) {
            setError(error.message);
        }
        setIsSigninUp(false);
    }
    return (
        <div className="w-full mx-auto bg-custom-white flex flex-col justify-center items-center gap-10 py-16 px-10">
            <div className="w-full mt-45 bg-transparent flex justify-center items-center">
                {isSigninUp && <Loader />}
            </div>
            <div className="w-full flex justify-center items-center">
                <h1 className="mx-auto text-4xl font-bold font-poppins text-custom-purple border-b-4 border-custom-purple py-2">Signup</h1>
            </div>
            <div className="w-full">
                <form className="w-full" onSubmit={handleSubmit(create)}>
                    <div className="w-full flex flex-col justify-center items-center gap-4">
                        <Input
                            label={<i className="fa-solid fa-user text-gray-500 text-lg"></i>}
                            parentClassName="flex justify-center items-center bg-slate-200 px-3"
                            className="py-4 px-2 bg-slate-200"
                            type="text"
                            placeholder="Full Name"

                            {...register("name", {
                                required: true,
                            })}
                        />

                        <Input
                            label={<i className="fa-solid fa-id-badge text-gray-500 text-lg"></i>}
                            parentClassName="flex justify-center items-center bg-slate-200 px-3"
                            className="py-4 px-2 bg-slate-200"
                            type="text"
                            placeholder="Username"

                            {...register("username", {
                                required: true,
                            })}
                        />

                        <Input
                            label={<i className="fa-solid fa-envelope text-gray-500 text-lg"></i>}
                            parentClassName="flex justify-center items-center bg-slate-200 px-3"
                            className="py-4 px-2 bg-slate-200"
                            type="email"
                            placeholder="Email"

                            {...register("email", {
                                required: true,
                            })}
                        />

                        <Input
                            label={<i className="fa-solid fa-lock text-gray-500 text-lg"></i>}
                            parentClassName="flex justify-center items-center bg-slate-200 px-3"
                            className="py-4 px-2 bg-slate-200"
                            type="password"
                            placeholder="Password"

                            {...register("password", {
                                required: true,
                            })}
                        />

                        <Button
                            type="submit"
                            className="w-full py-4 px-2 text-white font-medium hover:bg-violet-800"
                        >Create Account</Button>

                        {error && <p>{error}</p>}

                        <div className="w-full flex justify-between items-center gap-5 mt-5">

                            <NavLink
                                className={({ isActive }) => (isActive ? 'bg-custom-purple w-1/2 rounded-3xl py-2 flex justify-center items-center text-white' : 'bg-slate-300 w-1/2 rounded-3xl py-2 flex justify-center items-center text-black')}
                                to="/login"
                            >
                                Login
                            </NavLink>

                            <NavLink
                                className={({ isActive }) => (isActive ? 'bg-custom-purple w-1/2 rounded-3xl py-2 flex justify-center items-center text-white' : 'bg-slate-300 w-1/2 rounded-3xl py-2 flex justify-center items-center text-black font-medium')}
                                to="/signup"
                            >
                                Signup
                            </NavLink>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;