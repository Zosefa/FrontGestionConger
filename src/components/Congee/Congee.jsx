import { useEffect, useState } from "react";
import findAllCongee from "./service/findAllCongee";
import insertCongee from "./service/insertCongee";
import { toast, ToastContainer } from "react-toastify";
import deleteCongeeService from "./service/deleteConge";
import findAllEmployee from "../Admin/employee/service/findAllEmployee";

const Congee = () => {

    const [liste, setListe] = useState('');
    const [listeEmployee, setListeEmployee] = useState('');
    const [Congee,setCongee] = useState({
        "motif" : '',
        "durre" : '',
        "date_demande" : '',
        "date_debut" : '',
        'date_fin' : ''
    });
    const [Employee,setEmployee] = useState({});
    
    const durree = (debut,fin) => {
        const dateDebut = new Date(debut);
        const dateFin = new Date(fin);
    
        // Vérifiez que les dates sont valides
        if (isNaN(dateDebut) || isNaN(dateFin)) {
            console.error("Une des dates n'est pas valide.");
            return null;
        }
    
        const differenceMs = dateFin - dateDebut;
    
        const differenceJours = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    
        return differenceJours;
    };

    const insertion = async (e) => {
        e.preventDefault();
        if(new Date(Congee.date_debut) >= new Date()){
            const durreeDemande = durree(Congee.date_debut,Congee.date_fin);
            const updatedCongee = {
                ...Congee,
                durre: durreeDemande, 
            };
    
            setCongee(updatedCongee);

            console.log(Employee.id_employee)
    
            const CongeeToSend = {
                ...updatedCongee,
                employee_id: { 
                    id_employee: parseInt(Employee.id_employee, 10),
                    fonction_id : {
                       id_fonction : parseInt(Employee.fonction_id.id_fonction) 
                    }
                },         
            };
            try {
                await insertCongee(CongeeToSend,fetch);                         
                reset();
                toast.success("insertion reussit!");
            } catch (error) {
                console.log(error)
            }
        }else{
            toast.error("la date debut dois etre dans le future");
        }
        
    }

    const deleteCongee = async (id) => {
        try {
            await deleteCongeeService(id,fetch);
            toast.success("Suppresion reussit!");
        } catch (error) {
            console.log(error)
        }
    }

    const fetch = async () => {
        await findAllCongee(setListe);
    }

    const fetchEmployee = async () => {
        await findAllEmployee(setListeEmployee);
        
    }

    const reset = () => {
        setCongee({
            date_debut: '',
            motif: '',
            durre: '',
            date_fin: '',
            date_demande: '',
        });
        setEmployee('');
    };
    useEffect(() => {
        fetch();
        fetchEmployee();
    },[])

    return(
        <>
        <ToastContainer />
            <div className="d-flex justify-content-between">
                <h3>Congee</h3>
            </div>
            <div className="w-100">
                <form onSubmit={insertion}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                            <input type="date" value={Congee.date_debut} placeholder="date debut" className="form-control" onChange={(e) => setCongee({ ...Congee, date_debut : e.target.value, date_demande : e.target.value})}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                            <input type="date" value={Congee.date_fin} placeholder="date fin" className="form-control" onChange={(e) => setCongee({ ...Congee, date_fin : e.target.value})}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 mt-2">
                            <textarea placeholder="motif" className="form-control" value={Congee.motif} onChange={(e) => setCongee({ ...Congee, motif : e.target.value})}></textarea>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 mt-2">
                            <select name="" id="" className="form-select" onChange={(e) => setEmployee(JSON.parse(e.target.value))}>
                                <option disabled selected>choisir une Employee...</option>
                                {Array.isArray(listeEmployee) ? 
                                    listeEmployee.map((E) => (
                                        <option key={E.id_employee} value={JSON.stringify(E)}>{E.matricule} : {E.nom} {E.prenom}</option>
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
              <h6>Liste Congee</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead className="table-bordered">
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Employee</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Date demande</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Date debut</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Date fin</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Duree</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Motif</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(liste) ? 
                        liste.map((Congee) => (
                            <tr key={Congee.id_Congee}>
                                <td className="align-middle text-center text-sm">
                                    <span className="badge badge-sm text-secondary">{Congee.employee_id.matricule}</span>
                                </td>
                                <td className="align-middle text-center text-sm">
                                    <span className="badge badge-sm text-secondary">{Congee.date_demande}</span>
                                </td>
                                <td className="align-middle text-center text-sm">
                                    <span className="badge badge-sm text-secondary">{Congee.date_debut}</span>
                                </td>
                                <td className="align-middle text-center text-sm">
                                    <span className="badge badge-sm text-secondary">{Congee.date_fin}</span>
                                </td>
                                <td className="align-middle text-center text-sm">
                                    <span className="badge badge-sm text-secondary">{Congee.durre}</span>
                                </td>
                                <td className="align-middle text-center text-sm">
                                    <span className="badge badge-sm text-secondary">{Congee.motif}</span>
                                </td>
                                <td className="align-middle text-center d-flex gap-2 justify-content-center">
                                    <button className="btn btn-sm btn-info">edit</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => deleteCongee(Congee.id_Congee)}>delete</button>
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

export default Congee;