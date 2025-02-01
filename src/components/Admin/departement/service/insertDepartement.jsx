import axios from "axios"

const insertDepartement = (departement,fetch) => {
    const formData = {
        "departement" : departement
    }
    axios.post('http://localhost:8080/departement',formData,{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then((response => {
        fetch();
    }))
}
export default insertDepartement;