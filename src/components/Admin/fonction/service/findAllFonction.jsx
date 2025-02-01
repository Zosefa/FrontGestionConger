import axios from "axios"

const findAllFonction = (setListe) => {
    axios.get('http://localhost:8080/fonction',{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then(response => {
        setListe(response.data)
    })
}
export default findAllFonction;