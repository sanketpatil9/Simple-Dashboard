import React from "react";
import styles from './Header.module.scss';
import rightSideimg from '../../Assest/Images/Pentasafe-top-right-logo.png';


const Header=()=> {
    return (
        <div>
            <div className={styles.rightSidewidth}>
                <img  src={rightSideimg}></img>
                    
            </div>
        </div>
    )
}


export default Header;