import axios from "axios"

const insertFonction = (fonction,departement,fetch) => {
    const formData = {
        "fonction" : fonction,
        "departement_id" : {
            "id_departement" : departement
        }
    }
    axios.post('http://localhost:8080/fonction',formData,{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then((response => {
        fetch();
    }))
}
export default insertFonction;