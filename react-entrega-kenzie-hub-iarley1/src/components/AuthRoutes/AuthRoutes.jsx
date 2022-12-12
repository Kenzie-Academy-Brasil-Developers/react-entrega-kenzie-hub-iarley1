import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"

export function AuthRoutes () {
    const { user, authLoading } = useContext(UserContext)

    if(authLoading) {
        return (<div className="spinner"></div>)
      }  
      
      if(user){
        return <Outlet />
      }else{     
        return <Navigate to="/" />
      }
}