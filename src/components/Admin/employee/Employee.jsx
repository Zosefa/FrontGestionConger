import { useEffect, useState } from "react";
import findAllEmployee from "./service/findAllEmployee";
import insertEmployee from "./service/insertEmployee";
import { toast, ToastContainer } from "react-toastify";
import deleteEmployeeService from "./service/deleteEmployee";
import findAllGrade from "../grade/service/findAllGrade";
import findAllFonction from "../fonction/service/findAllFonction";

const Employee = () => {

    const [liste, setListe] = useState('');
    const [listeGrade, setListeGrade] = useState('');
    const [listeFonction, setListeFonction] = useState('');
    const [Employee,setEmployee] = useState({
        "matricule" : '',
        "nom" : '',
        "prenom" : '',
        "adresse" : '',
        'telephone' : '',
        'date_naissance' : '',
        'conge_annuel' : 30
    });
    const [Grade,setGrade] = useState('');
    const [Fonction,setFonction] = useState('');
    

    const insertion = async (e) => {
        e.preventDefault();
        const employeeToSend = {
            ...Employee,
            fonction_id: { id_fonction: Fonction }, 
            grade_id: { id_grade: Grade }           
        };
        try {
            await insertEmployee(employeeToSend,fetch);
            reset();
            toast.success("insertion reussit!");
        } catch (error) {
            console.log(error)
        }
    }

    const deleteEmployee = async (id) => {
        try {
            await deleteEmployeeService(id,fetch);
            toast.success("Suppresion reussit!");
        } catch (error) {
            console.log(error)
        }
    }

    const fetch = async () => {
        await findAllEmployee(setListe);
    }

    const fetchGrade = async () => {
        await findAllGrade(setListeGrade);
    }

    const fetchFonction = async () => {
        await findAllFonction(setListeFonction);
    }

    const reset = () => {
        setEmployee({
            matricule: '',
            nom: '',
            prenom: '',
            adresse: '',
            telephone: '',
            date_naissance: '',
            conge_annuel: 30
        });
        setGrade('');
        setFonction('');
    };
    useEffect(() => {
        fetch();
        fetchGrade();
        fetchFonction();
    },[])

    return(
        <>
        <ToastContainer />
            <div className="d-flex justify-content-between">
                <h3>Employee</h3>
            </div>
            <div className="w-100">
                <form onSubmit={insertion}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                            <input type="text" value={Employee.matricule} placeholder="Matricule" className="form-control" onChange={(e) => setEmployee({ ...Employee, matricule : e.target.value})}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                            <input type="text" value={Employee.nom} placeholder="Nom" className="form-control" onChange={(e) => setEmployee({ ...Employee, nom : e.target.value})}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 mt-2">
                            <input type="text" value={Employee.prenom} placeholder="prenom" className="form-control" onChange={(e) => setEmployee({ ...Employee, prenom : e.target.value})}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 mt-2">
                            <input type="text" value={Employee.adresse} placeholder="adresse" className="form-control" onChange={(e) => setEmployee({ ...Employee, adresse : e.target.value})}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 mt-2">
                            <input type="text" value={Employee.telephone} placeholder="telephone" className="form-control" onChange={(e) => setEmployee({ ...Employee, telephone : e.target.value})}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 mt-2">
                            <input type="date" value={Employee.date_naissance} placeholder="date de naissance" className="form-control" onChange={(e) => setEmployee({ ...Employee, date_naissance : e.target.value})}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 mt-2">
                            <input type="number" value={Employee.conge_annuel} placeholder="conge" className="form-control" onChange={(e) => setEmployee({ ...Employee, conge_annuel : e.target.value})} disabled/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 mt-2">
                            <select name="" id="" className="form-select" onChange={(e) => setGrade(e.target.value)}>
                                <option disabled selected>Choisir un grade...</option>
                                {Array.isArray(listeGrade) ? 
                                    listeGrade.map((D) => (
                                        <option value={D.id_grade}>{D.grade}</option>
                                    )) : (
                                        <option>Aucun donné trouvé</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 mt-2">
                            <select name="" id="" className="form-select" onChange={(e) => setFonction(e.target.value)}>
                                <option disabled selected>choisir une fonction...</option>
                                {Array.isArray(listeFonction) ? 
                                    listeFonction.map((F) => (
                                        <option value={F.id_fonction}>{F.fonction}</option>
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
              <h6>Liste Employee</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead className="table-bordered">
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Matricule</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Nom</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Prenom</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Telephone</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Adresse</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Congée annuel</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Grade</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Fonction</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(liste) ? 
                        liste.map((Employee) => (
                            <tr key={Employee.id_employee}>
                                <td className="align-middle text-center text-sm">
                                    <span className="badge badge-sm text-secondary">{Employee.matricule}</span>
                                </td>
                                <td className="align-middle text-center text-sm">
                                    <span className="badge badge-sm text-secondary">{Employee.nom}</span>
                                </td>
                                <td className="align-middle text-center text-sm">
                                    <span className="badge badge-sm text-secondary">{Employee.prenom}</span>
                                </td>
                                <td className="align-middle text-center text-sm">
                                    <span className="badge badge-sm text-secondary">{Employee.telephone}</span>
                                </td>
                                <td className="align-middle text-center text-sm">
                                    <span className="badge badge-sm text-secondary">{Employee.adresse}</span>
                                </td>
                                <td className="align-middle text-center text-sm">
                                    <span className="badge badge-sm text-secondary">{Employee.conge_annuel}</span>
                                </td>
                                <td className="align-middle text-center text-sm">
                                    <span className="badge badge-sm text-secondary">{Employee.grade_id.grade}</span>
                                </td>
                                <td className="align-middle text-center text-sm">
                                    <span className="badge badge-sm text-secondary">{Employee.fonction_id.fonction}</span>
                                </td>
                                <td className="align-middle text-center d-flex gap-2 justify-content-center">
                                    <button className="btn btn-sm btn-info">edit</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => deleteEmployee(Employee.id_employee)}>delete</button>
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

export default Employee;