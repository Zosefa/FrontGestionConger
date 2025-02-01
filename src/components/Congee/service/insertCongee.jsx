import axios from "axios"

const insertCongee = (Congee,fetch) => {
    
    axios.post('http://localhost:8080/congee',Congee,{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then((response => {
        fetch();
    }))
}
export default insertCongee;