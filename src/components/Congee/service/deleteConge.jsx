import axios from "axios"

const deleteCongeeService = (id,fetch) => {
    axios.delete(`http://localhost:8080/congee/${id}`,{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then((response => {
        fetch();
    }))
}
export default deleteCongeeService;