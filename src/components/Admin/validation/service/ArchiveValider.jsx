import axios from "axios"

const ArchiveValider = (setListe) => {
    axios.get('http://localhost:8080/CongerValider',{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then(response => {
        setListe(response.data)
    })
}
export default ArchiveValider;