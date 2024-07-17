import React from "react";
import styles from './LeftSection.module.scss';
import { Link } from "react-router-dom";

import pentasafe from '../../Assest/Images/logopentasafe.png';


const LeftSection = () => {
    return (
        <>

            {/* <h1 className={`${styles.firstRow} text-primary`}>sanket patil</h1> */}

            {/* <div className="container-fluid">

                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link">Dashboard</Link></li>
                    <li className="nav-item"><Link to="/StudentList" className="nav-link">StudentList</Link></li>
                    <li className="nav-item"><Link to="/Studentview" className="nav-link">Studentview</Link></li>
                    <li className="nav-item"><Link to="/StudentAdd" className="nav-link">StudentAdd</Link></li>
                    <li className="nav-item"><Link to="/StudentEdit" className="nav-link">StudentEdit</Link></li>
                    <li className="nav-item"><Link to="ImportList" className="nav-link">ImportList</Link></li>
                    <li className="nav-item"><Link to="ExportList" className="nav-link">ExportList</Link></li>
                </ul>

            </div> */}



            {/* <div className="container-fluid">
                <div className="row">


                    <div className="row">
                        <div className="col-12 d-flex justify-content-center align-items-center py-2 bg-light">
                            <img src={pentasafe} alt="Pentasafe Logo" className="logo-image" />
                        </div>
                    </div>



                    <div className="col-2">
                        <ul className="navbar-nav vh-100 bg-light">
                            <li className="nav-item"><Link to="/" className="nav-link">Dashboard</Link></li>
                            <li className="nav-item"><Link to="/StudentList" className="nav-link">StudentList</Link></li>
                            <li className="nav-item"><Link to="/Studentview" className="nav-link">Studentview</Link></li>
                            <li className="nav-item"><Link to="/StudentAdd" className="nav-link">StudentAdd</Link></li>
                            <li className="nav-item"><Link to="/StudentEdit" className="nav-link">StudentEdit</Link></li>
                            <li className="nav-item"><Link to="/ImportList" className="nav-link">ImportList</Link></li>
                            <li className="nav-item"><Link to="/ExportList" className="nav-link">ExportList</Link></li>
                        </ul>
                    </div>
                    <div className="col">

                    </div>
                </div>
            </div> */}

            {/* <div className="container-fluid">
                <div className="row align-items-start">
                    <div className={`col-md-2 ${styles.position}`}>
                        <img src={pentasafe} alt="Pentasafe Logo" className="img-fluid d-block mx-auto mt-3" style={{ maxWidth: '100px', maxHeight: 'auto' }} />
                        <ul className="navbar-nav vh-100 bg-light">
                            <li className="nav-item"><Link to="/" className="nav-link">Dashboard</Link></li>
                            <li className="nav-item"><Link to="/StudentList" className="nav-link">StudentList</Link></li>
                            <li className="nav-item"><Link to="/Studentview" className="nav-link">Studentview</Link></li>
                            <li className="nav-item"><Link to="/StudentAdd" className="nav-link">StudentAdd</Link></li>
                            <li className="nav-item"><Link to="/StudentEdit" className="nav-link">StudentEdit</Link></li>
                            <li className="nav-item"><Link to="/ImportList" className="nav-link">ImportList</Link></li>
                            <li className="nav-item"><Link to="/ExportList" className="nav-link">ExportList</Link></li>
                        </ul>
                    </div>
                </div>
            </div> */}


            <div className={styles['navbar-container']}>
                <img src={pentasafe} alt="Pentasafe Logo" className="img-fluid mx-auto mt-3 mb-3" style={{ maxWidth: '100px', maxHeight: 'auto' }} />
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className={`nav-link ${styles['nav-link']}`}>Dashboard</Link></li>
                    <li className="nav-item"><Link to="/StudentList" className={`nav-link ${styles['nav-link']}`}>Student List</Link></li>
                    <li className="nav-item"><Link to="/StudentView" className={`nav-link ${styles['nav-link']}`}>Student View</Link></li>
                    <li className="nav-item"><Link to="/StudentAdd" className={`nav-link ${styles['nav-link']}`}>Student Add</Link></li>
                    <li className="nav-item"><Link to="/StudentEdit" className={`nav-link ${styles['nav-link']}`}>Edit Student</Link></li>
                    <li className="nav-item"><Link to="/ImportList" className={`nav-link ${styles['nav-link']}`}>Import List</Link></li>
                    <li className="nav-item"><Link to="/ExportList" className={`nav-link ${styles['nav-link']}`}>Export List</Link></li>
                </ul>
            </div>

            {/* <li className="nav-item"><Link to="/StudentList" className={`nav-link ${styles['nav-link']}`}>Student List</Link></li> */}
        </>
    )
};

export default LeftSection;