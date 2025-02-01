import axios from "axios";
import { toast } from "react-toastify";

const ServiceRegister = (email,password,confirmation) => {
    
    if(password === confirmation){
        const formData = {
            "employee_id" : {
                "id_employee" : 4
            },
            "email" : email,
            "password" : password
        }
        try {
            axios.post("http://localhost:8080/users/register",formData,
                {
                    header:{
                        'Content-Type' : 'application/json'
                    }
                })
                toast.success('inscription Reussit!');
                
        } catch (error) {
            throw error;
        }
    }else{
        toast.error('Veuillez entrer vos informations');
    }
}

export default ServiceRegister;