import { Button, Logo } from "../index";
import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { CreatePostBtn, LogoutBtn } from "../index";
import { useRef, useState } from "react";
function Header() {

    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true
        },
        {
            name: "About",
            slug: "/about",
            active: true
        },
        {
            name: "Blogs",
            slug: "/blogs",
            active: true
        }

    ]

    return (
        <header className="w-full bg-custom-white md:px-5">
            <div className=" py-5 md:px-10 w-full">
                <div className="w-full flex justify-between items-center">
                    <div className="hidden md:flex justify-between items-start gap-2">
                        <Logo />
                    </div>


                    <div className="w-full flex-col md:flex-row flex justify-end items-center">
                        <div className="flex md:hidden px-5 w-full justify-between items-center">
                            <div className="flex justify-between items-center md:hidden gap-2">
                                <Logo />
                            </div>

                            <button
                                className="block md:hidden justify-self-end text-xl hover:bg-slate-200 py-2 px-3 rounded-full"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <i className="fa-regular fa-circle-xmark"></i> : <i className="fa-solid fa-list"></i>}
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="w-full hidden md:flex justify-between items-center">
                            <ul className="mx-auto font-sans hidden md:flex flex-row gap-2">
                                {navItems.map((navItem) => (
                                    navItem.active ? <li key={navItem.name} className="ml-5" >
                                        <NavLink
                                            className={({ isActive }) => (isActive ? 'text-custom-purple' : 'text-gray-600')}
                                            to={navItem.slug}
                                        >{navItem.name}
                                        </NavLink>
                                    </li> : null
                                ))}
                            </ul>
                            <div className="flex justify-center items-center gap-2">
                                {authStatus && (
                                    <CreatePostBtn />
                                )}
                                {authStatus && (
                                    <LogoutBtn />
                                )}
                                {!authStatus && (
                                    <Button
                                        textColor="text-white"
                                        className="w-full"
                                        onClick={() => navigate("/login")}>Login</Button>
                                )}
                                {!authStatus && (
                                    <Button
                                        textColor="text-white"
                                        className="w-full"
                                        onClick={() => navigate("/signup")}>Signup</Button>
                                )}

                            </div>
                        </div>



                        {/* Mobile Navigation */}
                        {isOpen && <div className="md:hidden h-36 ease-linear duration-200 w-full mt-5">
                            <ul className="w-full flex flex-col justify-center items-center font-sans text-lg gap-1">
                                {navItems.map((navItem) => (
                                    navItem.active ? <li key={navItem.name} className="w-full ml-10 hover:bg-slate-300 font-sans" >
                                        <NavLink
                                            className={({ isActive }) => (isActive ? 'text-custom-purple' : 'text-gray-600')}
                                            to={navItem.slug}
                                        >{navItem.name}
                                        </NavLink>
                                    </li> : null))}

                                {authStatus && (
                                    <li className="w-full ml-10 hover:bg-slate-300">
                                        <CreatePostBtn />
                                    </li>
                                )}
                                {authStatus && (
                                    <li className="w-full ml-10 hover:bg-slate-300">
                                        <LogoutBtn />
                                    </li>
                                )}
                                {!authStatus && (
                                    <li className="w-full ml-10 hover:bg-slate-300">
                                        <Button
                                            textColor="text-gray-600"
                                            className="w-full bg-transparent !p-0 !text-start"
                                            onClick={() => navigate("/login")}>Login</Button>
                                    </li>
                                )}
                                {!authStatus && (
                                    <li className="w-full ml-10 hover:bg-slate-300">
                                        <Button
                                            textColor="text-gray-600"
                                            className="w-full bg-transparent !p-0 !text-start flex justify-start"
                                            onClick={() => navigate("/signup")}>Signup</Button>
                                    </li>
                                )}

                            </ul>

                        </div>}
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;