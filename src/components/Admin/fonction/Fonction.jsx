import { useEffect, useState } from "react";
import findAllFonction from "./service/findAllFonction";
import insertFonction from "./service/insertFonction";
import { toast, ToastContainer } from "react-toastify";
import deleteFonctionService from "./service/deleteFonction";
import findAllDepartement from "../departement/service/findAllDepartement";

const Fonction = () => {

    const [liste, setListe] = useState('');
    const [listeDepartement, setListeDepartement] = useState('');
    const [Fonction,setFonction] = useState('');
    const [departement,setDepartement] = useState('');
    

    const insertion = async (e) => {
        e.preventDefault();
        try {
            await insertFonction(Fonction,departement,fetch);
            reset();
            toast.success("insertion reussit!");
        } catch (error) {
            console.log(error)
        }
    }

    const deleteFonction = async (id) => {
        try {
            await deleteFonctionService(id,fetch);
            toast.success("Suppresion reussit!");
        } catch (error) {
            console.log(error)
        }
    }

    const fetch = async () => {
        await findAllFonction(setListe);
    }

    const fetchDepartement = async () => {
        await findAllDepartement(setListeDepartement);
    }

    const reset = () => {
        setFonction("");
    }

    useEffect(() => {
        fetch();
        fetchDepartement();
    },[])

    return(
        <>
        <ToastContainer />
            <div className="d-flex justify-content-between">
                <h3>Fonction</h3>
            </div>
            <div className="w-100">
                <form onSubmit={insertion}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                            <input type="text" value={Fonction} placeholder="Fonction" className="form-control" onChange={(e) => setFonction(e.target.value)}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                            <select name="" id="" className="form-select" onChange={(e) => setDepartement(e.target.value)}>
                                {Array.isArray(listeDepartement) ? 
                                    listeDepartement.map((D) => (
                                        <option value={D.id_departement}>{D.departement}</option>
                                    )) : (
                                        <option>Aucun donné trouvé</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>    
                    <button className="btn btn-sm btn-success mt-2" type="submit">enregistrer</button>                
                </form>
            </div>
            

            <div className="card mt-4">
            <div className="card-header pb-0">
              <h6>Liste Fonction</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead className="table-bordered">
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Fonction</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Departement assignué</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(liste) ? 
                        liste.map((Fonction) => (
                            <tr key={Fonction.id_fonction}>
                                <td className="align-middle text-center text-sm">
                                    <span className="badge badge-sm text-secondary">{Fonction.fonction}</span>
                                </td>
                                <td className="align-middle text-center text-sm">
                                    <span className="badge badge-sm text-secondary">{Fonction.departement_id.departement}</span>
                                </td>
                                <td className="align-middle text-center d-flex gap-2 justify-content-center">
                                    <button className="btn btn-sm btn-info">edit</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => deleteFonction(Fonction.id_fonction)}>delete</button>
                                </td>
                            </tr>
                        ))
                    :(
                        <tr>
                            <td colSpan="2" className="text-center">Aucune donnée trouvé</td>
                        </tr>
                    )

                }
                                      
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
    )
}

export default Fonction;