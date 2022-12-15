import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../api/api";

export const TechContext = createContext({})

export function TechProvider ({children}) {
    const token = localStorage.getItem('token')
    const [showAddModal, setShowAddModal] = useState(false)
    const [showUpdateModal, setShowUpdateModal] = useState(false)
    const [techData, setTechData] = useState(null)

    function openModal () {
        setShowAddModal(true)
     }

     function closeModal () {
        setShowAddModal(false)
     }

     function openUpdateModal () {
        setShowUpdateModal(true)
     }

     function closeUpdateModal () {
        setShowUpdateModal(false)
     }

    async function addTech(data) {
        try {
            const res = await api.post("/users/techs", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Adicionado com sucesso", {
                autoClose: 1000,
                theme: "dark",
              });
            setShowAddModal(false)
        } catch (error) {
            toast.error(error.response.data.message, {
                autoClose: 1000,
                theme: "dark",
              });
        } finally {
          
        }
    }

    async function updateTech (id, data) {
        try {
            const res = await api.put(`/users/techs/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Atualizado com sucesso", {
                autoClose: 1000,
                theme: "dark"
            })
            closeUpdateModal()
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteTech (id) {
        try {
            const res = await api.delete(`/users/techs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Excluido com sucesso", {
                autoClose: 1000,
                theme: "dark"
            })
            closeUpdateModal()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TechContext.Provider value={{ addTech, showAddModal, openModal, closeModal, openUpdateModal, closeUpdateModal, showUpdateModal, techData, setTechData, deleteTech, updateTech }}>
            {children}
        </TechContext.Provider>
    )
}