import { useState } from "react";
import ServiceLogin from "./service/ServiceLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const connexion = async (e) => {
        e.preventDefault();
        try {
           await ServiceLogin(email, password, navigate);  
        } catch (error) {
            console.error(error)
        }
        
    }


    return (
        <>
            <main className="main-content  mt-0">
                <section>
                <div className="page-header min-vh-75">
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                        <div className="card card-plain mt-8">
                            <div className="card-header pb-0 text-left bg-transparent">
                            <h3 className="font-weight-bolder text-info text-gradient text-center">Connexion</h3>
                            </div>
                            <div className="card-body">
                            <form role="form" onSubmit={connexion}>
                                <label>Email</label>
                                <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon" onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <label>Password</label>
                                <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon" onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <div className="text-center">
                                <button type="submit" className="btn bg-gradient-info w-100 mt-4 mb-0">Connexion</button>
                                </div>
                            </form>
                            </div>
                            <div className="card-footer text-center pt-0 px-lg-2 px-1">
                            <p className="mb-4 text-sm mx-auto">
                                Pas de compte?
                                <a href="/Register" className="text-info text-gradient font-weight-bold">S'inscrire</a>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </main>
        </>
    )
}

export default Login;