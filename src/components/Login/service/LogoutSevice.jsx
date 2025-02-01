import axios from "axios";

const LogoutService = (token, navigate) => {
    try {
        axios.post("http://localhost:8080/users/logout",{},
            {
                headers:{
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${token}`
                }
            }).then(response => {
                sessionStorage.removeItem("APPLICATION_SEURITY");
                sessionStorage.removeItem("renvoie_backend_users");
                navigate("/")
            })
        
    } catch (error) {
        throw error;
    }
    
}

export default LogoutService;