import axios from "axios";

const ServiceLogin = (email,password,navigate) => {
    const formData = {
        "email" : email,
        "password" : password
    }
    try {
        axios.post("http://localhost:8080/users/login",formData,
            {
                header:{
                    'Content-Type' : 'application/json'
                }
            }).then(response => {
                sessionStorage.setItem("APPLICATION_SEURITY", response.data);
                navigate("/admin")
            })
        
    } catch (error) {
        throw error;
    }
    
}

export default ServiceLogin;