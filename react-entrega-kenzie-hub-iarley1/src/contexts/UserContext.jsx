import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { toast } from "react-toastify";

export const UserContext = createContext({})

export function Providers ({children}) {

    const [loading, setLoading] = useState(false);
    const [authLoading, setAuthLoading] = useState(true)
    const [user, setUser] = useState(null)

    const navigate = useNavigate();

    async function loginUser(data) {
        try {
          setLoading(true);
          const res = await api.post("/sessions", data)
          setUser(res.data.user)
        //   console.log(userToken)
          localStorage.setItem("token", res.data.token)
          localStorage.setItem("userId", res.data.user.id)
          setTimeout(() => {
            navigate("/dashboard")
          }, 1200);
        } catch (error) {
          toast.error(error.response.data.message, {
            autoClose: 1000,
            theme: "dark",
          });
        } finally {
          setLoading(false);
        }
      }

      useEffect(() => {
        async function getUser() {
            const token = localStorage.getItem('token')

            if(!token){
                setAuthLoading(false)
                return
            }
          try {
            const res = await api.get("/profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res)
            setUser(res.data)
          } catch (error) {
            localStorage.clear()
          } finally {
            setAuthLoading(false)
          }
        }
        getUser();
      }, []);

      async function registerUser(data) {
        try {
          setLoading(true);
          const res = await api.post("/users", data);
          toast.success("Conta criada com sucesso", {
            autoClose: 1000,
            theme: "dark",
          });
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } catch (error) {
          toast.error(error.response.data.message, {
            autoClose: 1000,
            theme: "dark",
          });
        } finally {
          setLoading(false);
        }
      }

    return (
        <UserContext.Provider value={{ loginUser, loading, registerUser, user, authLoading }}>
            {children}
        </UserContext.Provider>
    )
}