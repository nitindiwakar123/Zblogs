function Container({
    children,
    width = "w-full",
    height = "",
    className = ""
}) {
    return ( 
        <div className={`${width} ${height} ${className}`}>
            {children}
        </div>
     );
}

export default Container;