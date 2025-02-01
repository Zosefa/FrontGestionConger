import axios from "axios"

const ArchiveRefuser = (setListe) => {
    axios.get('http://localhost:8080/CongerRefuser',{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then(response => {
        setListe(response.data)
    })
}
export default ArchiveRefuser;