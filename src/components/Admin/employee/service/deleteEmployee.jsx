import axios from "axios"

const deleteEmployeeService = (id,fetch) => {
    axios.delete(`http://localhost:8080/employee/${id}`,{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then((response => {
        fetch();
    }))
}
export default deleteEmployeeService;