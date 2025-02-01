import axios from "axios";

const RealToken = async (token) => {
    try {
        const response = await axios.get("http://localhost:8080/users/real", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        sessionStorage.setItem("renvoie_backend_users", response.data);
    } catch (error) {
        console.error("Erreur lors de la récupération du token :", error);
    }
};

export default RealToken;
