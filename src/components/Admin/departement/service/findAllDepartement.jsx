import axios from "axios"

const findAllDepartement = (setListe) => {
    axios.get('http://localhost:8080/departement',{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then(response => {
        setListe(response.data)
    })
}
export default findAllDepartement;