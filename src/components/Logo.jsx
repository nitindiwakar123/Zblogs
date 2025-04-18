import logoSvg from "/assets/logo/logo.svg";

function Logo({
    width = "100px",
    className=""
}) {

    return (
        <div className={`w-[${width}] flex justify-center items-center gap-2 ${className}`}>
            <img className="w-8" src={logoSvg} alt="" />
            <h2 className="font-bold text-2xl">Zblogs</h2>
        </div>
    );
}

export default Logo;