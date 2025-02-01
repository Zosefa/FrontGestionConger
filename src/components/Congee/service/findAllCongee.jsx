import axios from "axios"

const findCongeeSexe = (setListe) => {
    axios.get('http://localhost:8080/congee/nonValider',{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then(response => {
        setListe(response.data)
    })
}
export default findCongeeSexe;