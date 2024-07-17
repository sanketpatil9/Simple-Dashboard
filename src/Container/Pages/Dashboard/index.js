
import React from "react";
import styles from './Dashboard.module.scss';

import DashboardMiddleImg from '../../../Assest/Images/Dashboard-middle-image.png';

const Dashboard = () => {
    return (
        <div>

            <div><h2 className={`${styles.adjust} text-start fw-bold`} >Welcome Admin!</h2></div>
            <div><h2 className={`${styles.adjust} text-start fw-bold`} >Dashboard!</h2></div>

            <div className={styles.dashboardContainer}>


                <img src={DashboardMiddleImg} alt="Dashboard" />

            </div>
        </div>

    )
}


export default Dashboard;