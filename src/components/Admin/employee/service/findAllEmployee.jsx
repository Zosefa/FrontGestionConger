import axios from "axios"

const findAllEmployee = (setListe) => {
    axios.get('http://localhost:8080/employee',{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then(response => {
        setListe(response.data)
    })
}
export default findAllEmployee;