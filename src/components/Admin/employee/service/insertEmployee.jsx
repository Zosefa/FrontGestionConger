import axios from "axios"

const insertEmployee = (Employee,fetch) => {
    
    axios.post('http://localhost:8080/employee',Employee,{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then((response => {
        fetch();
    }))
}
export default insertEmployee;