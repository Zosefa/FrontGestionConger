import { Navigate } from "react-router-dom";
import axios from "axios";

const AuthRoot = ({ children }) => {
    const token = sessionStorage.getItem('APPLICATION_SEURITY');
    if (token) {      
        try {
            axios.get("http://localhost:8080/users/real", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }).then(response => {
                sessionStorage.setItem("renvoie_backend_users", response.data);
                if(!response.data){
                    return <Navigate to="/" />;
                }
            });
        } catch (error) {
            console.error("Erreur lors de la récupération du token :", error);
        }
    }else{
        return <Navigate to="/" />;
    }
    
  return children;
}

export default AuthRoot
