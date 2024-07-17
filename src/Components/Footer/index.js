
import React from "react";
import styles from './Footer.module.scss';


const Footer = () => {
    return (
        // <div className={`${styles.footerWrapper} container-fluid`}>
        //     <footer className={`${styles.footer} row`}>
        //         <div className="col-12 text-center">
        //             <p className="fs-5 mt-3 fw-bold">
        //                 &copy; {new Date().getFullYear()} Developer Guru. All rights reserved.
        //             </p>
        //             <p className="fs-5 mt-3 fw-bold">Developer Guru</p>
        //         </div>
        //     </footer>
        // </div>

        
        <div className={`${styles.footerWrapper} container-fluid`}>
            <footer className="row">
                <div className="col-12 text-center">
                    <p className="fs-5 mt-3 fw-bold">
                        &copy; {new Date().getFullYear()} Developer Guru. All rights reserved.
                    </p>
                    <p className="fs-5 mt-3 fw-bold">Developer Guru</p>
                </div>
            </footer>
        </div>
    )
}




export default Footer;