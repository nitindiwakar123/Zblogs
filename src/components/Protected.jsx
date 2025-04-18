import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({
    children,
    authentication = "true"
}) {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => { 
        if(authentication && authStatus !== authentication) {
            navigate("/login");
            alert("Login or signup first to read post!");
        }
        
        setLoading(false);
    }, [authentication, authStatus, navigate]);

    return (
        loading ? <h1>loading...</h1> : <>{children}</>
    )
}

export default Protected;