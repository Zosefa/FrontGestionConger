import axios from "axios"

const deleteSexeService = (id,fetch) => {
    axios.delete(`http://localhost:8080/sexe/${id}`,{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then((response => {
        fetch();
    }))
}
export default deleteSexeService;