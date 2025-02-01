import axios from "axios"

const deleteDepartementService = (id,fetch) => {
    axios.delete(`http://localhost:8080/departement/${id}`,{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then((response => {
        fetch();
    }))
}
export default deleteDepartementService;