import axios from "axios"

const insertSexe = (sexe,fetch) => {
    const formData = {
        "sexe" : sexe
    }
    axios.post('http://localhost:8080/sexe',formData,{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then((response => {
        fetch();
    }))
}
export default insertSexe;