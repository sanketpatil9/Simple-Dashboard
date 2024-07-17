import React, { useState, useEffect } from "react";
import styles from './StudentView.module.scss';
import logo from '../../../Assest/Images/Screenshot 2024-07-10 202159.png';

const StudentView = () => {
    const [studentDetails, setStudentDetails] = useState();

    useEffect(() => {
        setStudentDetails([
            { fullName: 'Sanket Patil', department: 'Computer Science', mobile: '+91 9527657281', email: 'sanketpatil@gmail.com', gender: 'Male', dob: '30 Apr 2000' }
        ]);
    }, []);

    return (
        <div className="container">
            <div className={styles.itsPosition}>
                <h3 className="text-start ms-5">StudentDetails</h3>
            </div>

            <div className={`${styles.studentListContainer} row justify-content-center`}>
                <div className="col-md-6 d-flex align-items-center">
                    <input className="form-control me-2 text-center text-red fw-bold" type="text" placeholder="Search" />
                    <button className="btn btn-danger">Submit</button>
                </div>
            </div>

            {studentDetails?.map((item,index) => (            // ? input bhetat nvt mhanun //
                <div className={`${styles.studentListContainer} row justify-content-center mt-4`} key={index}>
                    <div className="col-md-6 d-flex justify-content-start mt-2">
                        <img className={styles.logoAdjust} src={logo} alt="Logo" />
                        <div className={`ms-3 ${styles.details}`}>
                            <p><strong>Full Name: </strong>{item.fullName}</p>
                            <p><strong>Department: </strong>{item.department}</p>
                            <p><strong>Mobile: </strong>{item.mobile}</p>
                            <p><strong>Email: </strong>{item.email}</p>
                            <p><strong>Gender: </strong>{item.gender}</p>
                            <p><strong>DOB: </strong>{item.dob}</p>
                            <div className="mt-2">
                                <button className="btn btn-primary me-2">Update</button>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StudentView;






























// import React from "react";
// import styles from './StudentView.module.scss';
// import logo from '../../../Assest/Images/Screenshot 2024-07-10 202159.png';


// const StudentView = () => {
//     return (
//         <div>
//             {/* <div className={styles.itsPosition}>
//                 <h3 className="text-start ms-5">StudentDetails</h3>
//             </div>

//             <div className={styles.studentListContainer}>
//                 <div className="d-flex align-items-center">
//                     <input className="form-control  text-center text-red fw-bold" type="text" placeholder="Search" />
//                     <button className="btn btn-danger bg-danger">Submit</button>
//                     <img className={styles.lofoAdjust} src={logo}></img>
//                 </div>
//             </div> */}




//             {/* <div className="container">
//                 <div className={styles.itsPosition}>
//                     <h3 className="text-start ms-5">StudentDetails</h3>
//                 </div>

//                 <div className={`${styles.studentListContainer} row justify-content-center`}>
//                     <div className="col-md-6 d-flex align-items-center">
//                         <input className="form-control me-2 text-center text-red fw-bold" type="text" placeholder="Search" />
//                         <button className="btn btn-danger bg-danger">Submit</button>
//                     </div>
//                     <div className="w-100"></div>
//                     <div className="col-md-6 d-flex justify-content-start mt-2">
//                         <img className={styles.logoAdjust} src={logo} alt="Logo" />
//                     </div>
//                 </div>
//             </div> */}








//             {/* <div className="container">
//                 <div className={styles.itsPosition}>
//                     <h3 className="text-start ms-5">StudentDetails</h3>
//                 </div>

//                 <div className={`${styles.studentListContainer} row justify-content-center`}>
//                     <div className="col-md-6 d-flex align-items-center">
//                         <input className="form-control me-2 text-center text-red fw-bold" type="text" placeholder="Search" />
//                         <button className="btn btn-danger bg-danger">Submit</button>
//                     </div>
//                     <div className="w-100"></div>
//                     <div className="col-md-6 d-flex justify-content-start mt-2">
//                         <img className={styles.logoAdjust} src={logo} alt="Logo" />

//                     </div>
//                 </div>
//             </div> */}



//             <div className="container">
//                 <div className={styles.itsPosition}>
//                     <h3 className="text-start ms-5">StudentDetails</h3>
//                 </div>

//                 <div className={`${styles.studentListContainer} row justify-content-center`}>
//                     <div className="col-md-6 d-flex align-items-center">
//                         <input className="form-control me-2 text-center text-red fw-bold" type="text" placeholder="Search" />
//                         <button className="btn btn-danger bg-danger">Submit</button>
//                     </div>
//                     <div className=""></div>
//                     <div className="col-md-6 d-flex justify-content-start mt-2">
//                         <img className={styles.logoAdjust} src={logo} alt="Logo" />
//                         <div className={`ms-3 ${styles.details}`}>
//                             <p><strong>Full Name:</strong> Sanket Patil</p>
//                             <p><strong>Department:</strong> Computer Science</p>
//                             <p><strong>Mobile:</strong> +91 9527657281</p>
//                             <p><strong>Email:</strong> sanketpatil@gmail.com</p>
//                             <p><strong>Gender:</strong> Male</p>
//                             <p><strong>DOB:</strong> 30 Apr 2000</p>
//                             <div className="mt-2">
//                                 <button className="btn btn-primary me-2">Update</button>
//                                 <button className="btn btn-danger">Delete</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }



// export default StudentView;

//****************************************************************************************************** */


// import React, { useState, useEffect } from "react";
// import styles from './StudentView.module.scss';
// import logo from '../../../Assest/Images/Screenshot 2024-07-10 202159.png';

// const StudentView = () => {
//     const [student, setStudent] = useState();

//     useEffect(() => {
//         const studentDetails = [
//             { fullName: 'Sanket Patil', department: 'Computer Science', mobile: '+91 9527657281', email: 'sanketpatil@gmail.com', gender: 'Male', dob: '30 Apr 2000' }
//         ];
//         setStudent(studentDetails[0]); // Set the state to the first (and only) student in the array
//     }, []);

//     return (
//         <div className="container">
//             <div className={styles.itsPosition}>
//                 <h3 className="text-start ms-5">StudentDetails</h3>
//             </div>

//             <div className={`${styles.studentListContainer} row justify-content-center`}>
//                 <div className="col-md-6 d-flex align-items-center">
//                     <input className="form-control me-2 text-center text-red fw-bold" type="text" placeholder="Search" />
//                     <button className="btn btn-danger bg-danger">Submit</button>
//                 </div>
//             </div>

//             {student && (
//                 <div className={`${styles.studentListContainer} row justify-content-center mt-4`}>
//                     <div className="col-md-6 d-flex justify-content-start mt-2">
//                         <img className={styles.logoAdjust} src={logo} alt="Logo" />
//                         <div className={`ms-3 ${styles.details}`}>
//                             <p><strong>Full Name:</strong> {student.fullName}</p>
//                             <p><strong>Department:</strong> {student.department}</p>
//                             <p><strong>Mobile:</strong> {student.mobile}</p>
//                             <p><strong>Email:</strong> {student.email}</p>
//                             <p><strong>Gender:</strong> {student.gender}</p>
//                             <p><strong>DOB:</strong> {student.dob}</p>
//                             <div className="mt-2">
//                                 <button className="btn btn-primary me-2">Update</button>
//                                 <button className="btn btn-danger">Delete</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default StudentView;




















