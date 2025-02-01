import axios from "axios"

const deleteFonctionService = (id,fetch) => {
    axios.delete(`http://localhost:8080/fonction/${id}`,{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then((response => {
        fetch();
    }))
}
export default deleteFonctionService;