import axios from "axios"

const findAllGrade = (setListe) => {
    axios.get('http://localhost:8080/grade',{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then(response => {
        setListe(response.data)
    })
}
export default findAllGrade;