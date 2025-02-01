import { useEffect, useState } from "react";
import findAllGrade from "./service/findAllGrade";
import insertGrade from "./service/insertGrade";
import { toast, ToastContainer } from "react-toastify";
import deleteGradeService from "./service/deleteGrade";

const Grade = () => {

    const [liste, setListe] = useState('');
    const [Grade,setGrade] = useState('');
    

    const insertion = async (e) => {
        e.preventDefault();
        try {
            await insertGrade(Grade,fetch);
            reset();
            toast.success("insertion reussit!");
        } catch (error) {
            console.log(error)
        }
    }

    const deleteGrade = async (id) => {
        try {
            await deleteGradeService(id,fetch);
            toast.success("Suppresion reussit!");
        } catch (error) {
            console.log(error)
        }
    }

    const fetch = async () => {
        await findAllGrade(setListe);
    }

    const reset = () => {
        setGrade("");
    }

    useEffect(() => {
        fetch();
    },[])

    return(
        <>
        <ToastContainer />
            <div className="d-flex justify-content-between">
                <h3>Grade</h3>
            </div>
            <div className="w-100">
                <form onSubmit={insertion}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                            <input type="text" value={Grade} placeholder="Grade" className="form-control" onChange={(e) => setGrade(e.target.value)}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                            <button className="btn btn-sm btn-success" type="submit">enregistrer</button>
                        </div>
                    </div>                    
                </form>
            </div>
            

            <div className="card mt-4">
            <div className="card-header pb-0">
              <h6>Liste Grade</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead className="table-bordered">
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Grade</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(liste) ? 
                        liste.map((Grade) => (
                            <tr key={Grade.id_grade}>
                                <td className="align-middle text-center text-sm">
                                    <span className="badge badge-sm text-secondary">{Grade.grade}</span>
                                </td>
                                <td className="align-middle text-center d-flex gap-2 justify-content-center">
                                    <button className="btn btn-sm btn-info">edit</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => deleteGrade(Grade.id_grade)}>delete</button>
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

export default Grade;