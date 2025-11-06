import { useState, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../appwrite/authService/auth";
import { useForm } from "react-hook-form";
import { Input, Button, Loading } from "./index";
import { login as storeLogin } from "../features/auth/authSlice";

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(null);
    const [loggingIn, setLoggingIn] = useState(false);

    const createSession = async (data) => {
        setError("");
        setLoggingIn(true);
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(storeLogin(userData));

                }
                navigate("/");

            }
        } catch (error) {
            setError(error.message);
        }
        setLoggingIn(false);
    }

    return (
        <div className="w-full mx-auto bg-custom-white flex flex-col justify-center items-center gap-10 py-16 px-10">
            {loggingIn && <Loading />}
            <div className="w-full flex justify-center items-center">
                <h1 className="mx-auto text-4xl font-bold font-poppins text-custom-purple border-b-4 border-custom-purple py-2">Login</h1>
            </div>
            <div className="w-full">
                <form className="w-full" onSubmit={handleSubmit(createSession)}>
                    <div className="w-full flex flex-col justify-center items-center gap-4">
                        <Input
                            type="text"
                            label={<i className="fa-solid fa-envelope text-gray-500 text-lg"></i>}
                            parentClassName="flex justify-center items-center bg-slate-200 px-3"
                            className="py-4 px-2 bg-slate-200"
                            placeholder={` Email`}
                            {...register("email", {
                                required: true,
                            })}
                        />

                        <Input
                            type="password"
                            label={<i className="fa-solid fa-lock text-gray-500 text-lg"></i>}
                            parentClassName="flex justify-center items-center bg-slate-200 px-3"
                            className="py-4 px-2 bg-slate-200"
                            placeholder="Password"
                            {...register("password", {
                                required: true,
                            })}
                        />

                        <Button
                            type="submit"
                            className="w-full py-4 px-2 text-white font-medium hover:bg-violet-800"
                        >Login</Button>

                        {error && <p className="text-red-600">{error}</p>}

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

export default Login;