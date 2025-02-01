import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import findCongeeSexe from "../../Congee/service/findAllCongee";
import Valider from "./service/Valider";
import Refuser from "./service/Refuser";
import ArchiveRefuser from "./service/ArchuveRefuser";
import ArchiveValider from "./service/ArchiveValider";

const Validation = () => {
    const [liste, setListe] = useState('');
    const [listeValider, setListeValider] = useState('');
    const [listeRefuser, setListeRefuser] = useState('');

    const validationCongee = (id_congee) => {
        const formData = {
            'date_validation': new Date().toISOString().split('T')[0], 
            'congee': {
                'id_congee': id_congee
            },
            'users': {
                'id_user': 9
            }
        };
        try {
            Valider(formData, fetch);
            toast.success("Validation réussie !");
        } catch (error) {
            console.log(error);
            toast.error("Erreur lors de la validation.");
        }
    };

    const refus = (id_congee) => {
        const formData = {
            'date_refus': new Date().toISOString().split('T')[0], 
            'congee': {
                'id_congee': id_congee
            },
            'users': {
                'id_user': 9
            }
        };
        try {
            Refuser(formData, fetch);
            toast.success("Congé refusé !");
        } catch (error) {
            console.log(error);
            toast.error("Erreur lors du refus.");
        }
    };

    const fetch = async () => {
        try {
            await findCongeeSexe(setListe);
        } catch (error) {
            console.log(error);
            toast.error("Erreur lors du chargement des congés.");
        }
    };

    const fetchValider = async () => {
        try {
            await ArchiveValider(setListeValider);
        } catch (error) {
            console.log(error);
            toast.error("Erreur lors du chargement des congés.");
        }
    };

    const fetchRefuser = async () => {
        try {
            await ArchiveRefuser(setListeRefuser);
        } catch (error) {
            console.log(error);
            toast.error("Erreur lors du chargement des congés.");
        }
    };

    useEffect(() => {
        fetch();
        fetchValider();
        fetchRefuser();
    }, []);

    return (
        <>
            <ToastContainer />
            <div className="d-flex justify-content-between">
                <h3>Validation</h3>

                <div className="d-flex gap-2">

                    
                <button type="button" class="btn btn-primary btn btn-sm btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Archive valider
                </button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Archive valider</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <table className="table align-items-center mb-0">
                            <thead className="table-bordered">
                                <tr>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Employé</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Date demande</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Date début</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Date fin</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Durée</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Motif</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(listeValider) ? 
                                    listeValider.map((liste) => (
                                        <tr key={liste.id_conger_refuser}>
                                            <td className="align-middle text-center text-sm">
                                                <span className="badge badge-sm text-secondary">{liste.users.employee_id.matricule}</span>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <span className="badge badge-sm text-secondary">{liste.congee.date_demande}</span>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <span className="badge badge-sm text-secondary">{liste.congee.date_debut}</span>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <span className="badge badge-sm text-secondary">{liste.congee.date_fin}</span>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <span className="badge badge-sm text-secondary">{liste.congee.durre}</span>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <span className="badge badge-sm text-secondary">{liste.congee.motif}</span>
                                            </td>
                                            <td className="align-middle text-center ">
                                                <span className="badge badge-sm bg-gradient-success">valider</span>
                                            </td>
                                        </tr>
                                    ))
                                : (
                                    <tr>
                                        <td colSpan="7" className="text-center">Aucune donnée trouvée</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">fermer</button>
                        </div>
                        </div>
                    </div>
                </div>

                <button type="button" class="btn btn-primary btn btn-sm btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                    Archive refuser
                </button>

                <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Archive de rufus</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <table className="table align-items-center mb-0">
                            <thead className="table-bordered">
                                <tr>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Employé</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Date demande</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Date début</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Date fin</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Durée</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Motif</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(listeRefuser) ? 
                                    listeRefuser.map((liste) => (
                                        <tr key={liste.id_conger_refuser}>
                                            <td className="align-middle text-center text-sm">
                                                <span className="badge badge-sm text-secondary">{liste.users.employee_id.matricule}</span>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <span className="badge badge-sm text-secondary">{liste.congee.date_demande}</span>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <span className="badge badge-sm text-secondary">{liste.congee.date_debut}</span>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <span className="badge badge-sm text-secondary">{liste.congee.date_fin}</span>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <span className="badge badge-sm text-secondary">{liste.congee.durre}</span>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <span className="badge badge-sm text-secondary">{liste.congee.motif}</span>
                                            </td>
                                            <td className="align-middle text-center ">
                                            <span className="badge badge-sm bg-gradient-danger">Refuser</span>
                                            </td>
                                        </tr>
                                    ))
                                : (
                                    <tr>
                                        <td colSpan="7" className="text-center">Aucune donnée trouvée</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">fermer</button>
                        </div>
                        </div>
                    </div>
                </div>




                </div>
            </div>

            <div className="card mt-4">
                <div className="card-header pb-0">
                    <h6>Liste Congé</h6>
                </div>
                <div className="card-body px-0 pt-0 pb-2">
                    <div className="table-responsive p-0">
                        <table className="table align-items-center mb-0">
                            <thead className="table-bordered">
                                <tr>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Employé</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Date demande</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Date début</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Date fin</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Durée</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Motif</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(liste) ? 
                                    liste.map((Congee) => (
                                        <tr key={Congee.id_congee}>
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
                                                <button className="btn btn-sm btn-success" onClick={() => validationCongee(Congee.id_congee)}>Accorder</button>
                                                <button className="btn btn-sm btn-danger" onClick={() => refus(Congee.id_congee)}>Refuser</button>
                                            </td>
                                        </tr>
                                    ))
                                : (
                                    <tr>
                                        <td colSpan="7" className="text-center">Aucune donnée trouvée</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Validation;
