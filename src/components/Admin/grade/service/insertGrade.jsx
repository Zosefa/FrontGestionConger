import axios from "axios"

const insertGrade = (grade,fetch) => {
    const formData = {
        "grade" : grade
    }
    axios.post('http://localhost:8080/grade',formData,{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then((response => {
        fetch();
    }))
}
export default insertGrade;