import { useNavigate } from "react-router-dom";
import LogoutService from "../Login/service/LogoutSevice";
import { useState } from "react";
import Acceuil from "../Admin/Acceuil/Acceuil";
import Sexe from "../Admin/Sexe/Sexe";
import Departement from "../Admin/departement/Departement";
import Grade from "../Admin/grade/Grade";
import Fonction from "../Admin/fonction/Fonction";
import Employee from "../Admin/employee/Employee";
import Congee from "../Congee/Congee";
import Validation from "../Admin/validation/Validation";

const SideBar = () => {
  const navigate = useNavigate();
  const [page,setPage] = useState(1);
  const logout = async () => {
    const token = sessionStorage.getItem('APPLICATION_SEURITY');
    try {
      await LogoutService(token, navigate)
    } catch (error) {
      console.log(error)
    }
  }
    return (
        <>
          <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main" style={{'height': '100vh !important'}}>
            <div className="sidenav-header">
              <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
              <a className="navbar-brand m-0" href="/admin">
                <span className="ms-1 font-weight-bold">Gestion Congée</span>
              </a>
            </div>
            <hr className="horizontal dark mt-0" />
            <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main" style={{'height' : '100vh !important'}}>
              <ul className="navbar-nav">

                <li className="nav-item" onClick={() => {
                  setPage(1);
                }}>
                  <a className="nav-link  " href="#">
                    <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                      
                        
                    </div>
                    <span className="nav-link-text ms-1">Sexe</span>
                  </a>
                </li>

                <li className="nav-item" onClick={() => {
                  setPage(2);
                }}>
                  <a className="nav-link  " href="#">
                    <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                      
                        
                    </div>
                    <span className="nav-link-text ms-1">Departement</span>
                  </a>
                </li>

                <li className="nav-item" onClick={() => {
                  setPage(3);
                }}>
                  <a className="nav-link  " href="#">
                    <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                    
                        
                    </div>
                    <span className="nav-link-text ms-1">Grade</span>
                  </a>
                </li>

                <li className="nav-item" onClick={() => {
                  setPage(4);
                }}>
                  <a className="nav-link  " href="#">
                    <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        
                        
                    </div>
                    <span className="nav-link-text ms-1">Fonction</span>
                  </a>
                </li>

                <li className="nav-item" onClick={() => {
                  setPage(5);
                }}>
                    <a className="nav-link  " href="#">
                      <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                          
                          
                      </div>
                      <span className="nav-link-text ms-1">Employee</span>
                    </a>
                  </li>

                  <li className="nav-item" onClick={() => {
                  setPage(6);
                }}>
                    <a className="nav-link  " href="#">
                      <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                          
                         
                      </div>
                      <span className="nav-link-text ms-1">Congee</span>
                    </a>
                  </li>

                  <li className="nav-item" onClick={() => {
                  setPage(7);
                }}>
                    <a className="nav-link  " href="#">
                      <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                          
                          
                      </div>
                      <span className="nav-link-text ms-1">Validation</span>
                    </a>
                  </li>

                  <li className="nav-item" onClick={logout}>
                    <a className="nav-link  " href="#">
                      <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                          
                          
                      </div>
                      <span className="nav-link-text ms-1">Deconnexion</span>
                    </a>
                  </li>
              </ul>
            </div>
          </aside>

          <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <div class="container-fluid py-4">
              { page === 1 ? <Sexe /> : '' }
              { page === 2 ? <Departement /> : '' }
              { page === 3 ? <Grade /> : '' }
              { page === 4 ? <Fonction /> : '' }
              { page === 5 ? <Employee /> : '' }
              { page === 6 ? <Congee /> : '' }
              { page === 7 ? <Validation /> : '' }
            </div>
          </main>

          
        </>
    )
}

export default SideBar;