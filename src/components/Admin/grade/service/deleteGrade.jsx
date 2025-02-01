import axios from "axios"

const deleteGradeService = (id,fetch) => {
    axios.delete(`http://localhost:8080/grade/${id}`,{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then((response => {
        fetch();
    }))
}
export default deleteGradeService;