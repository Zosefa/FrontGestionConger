import axios from "axios"

const Refuser = (data,fetch) => {
    axios.post('http://localhost:8080/CongerRefuser',data,{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then((response) => {
        fetch();
    })

}

export default Refuser;