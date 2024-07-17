import React from "react";
import styles from './StudentEdit.module.scss';

import logo from '../../../Assest/Images/studentAdd.png';


const StudentEdit = () => {
    return (
        <div>
            <div className="container">
                {/* <div className="row">
                    <div className="col-12">
                        <h2 className={`text-start ${styles.addStudentsHeading}`}>Add Students</h2>
                    </div>
                </div> */}
                <div className="row justify-content-center">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <img src={logo} alt="Add Student" className={styles.logoAdjust} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default StudentEdit;