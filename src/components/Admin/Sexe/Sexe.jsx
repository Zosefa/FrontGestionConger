import { useEffect, useState } from "react";
import findAllSexe from "./service/findAllSexe";
import insertSexe from "./service/insertSexe";
import { toast, ToastContainer } from "react-toastify";
import deleteSexeService from "./service/deleteSexe";

const Sexe = () => {

    const [liste, setListe] = useState('');
    const [sexe,setSexe] = useState('');
    

    const insertion = async (e) => {
        e.preventDefault();
        try {
            await insertSexe(sexe,fetch);
            reset();
            toast.success("insertion reussit!");
        } catch (error) {
            console.log(error)
        }
    }

    const deleteSexe = async (id) => {
        try {
            await deleteSexeService(id,fetch);
            toast.success("Suppresion reussit!");
        } catch (error) {
            console.log(error)
        }
    }

    const fetch = async () => {
        await findAllSexe(setListe);
    }

    const reset = () => {
        setSexe("");
    }

    useEffect(() => {
        fetch();
    },[])

    return(
        <>
        <ToastContainer />
            <div className="d-flex justify-content-between">
                <h3>Sexe</h3>
            </div>
            <div className="w-100">
                <form onSubmit={insertion}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                            <input type="text" value={sexe} placeholder="sexe" className="form-control" onChange={(e) => setSexe(e.target.value)}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                            <button className="btn btn-sm btn-success" type="submit">enregistrer</button>
                        </div>
                    </div>                    
                </form>
            </div>
            

            <div className="card mt-4">
            <div className="card-header pb-0">
              <h6>Liste Sexe</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead className="table-bordered">
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Sexe</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(liste) ? 
                        liste.map((sexe) => (
                            <tr key={sexe.id_sexe}>
                                <td className="align-middle text-center text-sm">
                                    <span className="badge badge-sm text-secondary">{sexe.sexe}</span>
                                </td>
                                <td className="align-middle text-center d-flex gap-2 justify-content-center">
                                    <button className="btn btn-sm btn-info">edit</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => deleteSexe(sexe.id_sexe)}>delete</button>
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

export default Sexe;