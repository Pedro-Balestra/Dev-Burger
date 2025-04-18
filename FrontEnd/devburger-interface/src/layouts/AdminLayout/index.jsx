import { Navigate, Outlet } from "react-router-dom";

export function AdminLayout(){
    const {admin: isAdmin} = JSON.parse(
        localStorage.getItem('devburger:userData')
    );
    return isAdmin ? <Outlet></Outlet> : <Navigate to='/login'></Navigate>
}