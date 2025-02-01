import axios from "axios"

const findAllSexe = (setListe) => {
    axios.get('http://localhost:8080/sexe',{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then(response => {
        setListe(response.data)
    })
}
export default findAllSexe;