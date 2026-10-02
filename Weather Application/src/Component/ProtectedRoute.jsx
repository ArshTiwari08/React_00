import { Navigate , Outlet } from "react-router-dom";

function ProtectedRoute(){
    const isloggedIn = localStorage.getItem("isLoggedIn")
    if(!isloggedIn){
        return <Navigate to="login" replace/>
    }
    return <Outlet/>
}

export default ProtectedRoute