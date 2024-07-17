import React from "react";
import styles from './ImportList.module.scss';

const ImportList = () => {
    return (
        <div className={styles.container}>
            <h2 className={`text-start ${styles.heading}`}>Import List</h2>
            <div className={`d-flex flex-column align-items-center ${styles.formWrapper}`}>
                <label className="form-label mt-3">Select your File</label>
                <input type="file" className="form-control" />
                <button className="btn btn-danger mt-3">Submit</button>
            </div>
        </div>
    );
}

export default ImportList;
