import axios from "axios"

const Valider = (data,fetch) => {
    axios.post('http://localhost:8080/CongerValider',data,{
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then((response) => {
        fetch();
    })

}

export default Valider;