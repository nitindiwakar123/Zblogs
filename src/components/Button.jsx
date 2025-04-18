function Button({
    children,
    type = "button",
    textColor = "text-white-200",
    bgColor = "bg-custom-purple",
    className = "",
    ...props
}) {
    return ( 
        <button type={type} className={`px-5 py-2 font-sans outline-none rounded-md transition-all duration-200 ease-linear ${textColor} ${bgColor} ${className}`} {...props}>{children}</button>
     );
}

export default Button;