
import React, { useEffect, useState } from "react";
import styles from './StudentList.module.scss';

const StudentList = () => {
    const [userProfile, setUserProfile] = useState();        // useState use here //

    const studentDetail = [
        { 'id': 'PRE1234', 'Name': 'Shankar Sir Patil (developer guru)', 'Class': '10 B', 'DOB': '26 Apr 1994', 'ParentName': 'Stephen Marley', 'Mob': '77 3499 9959', 'Address': 'Karve Nagar' },
        { 'id': 'PRE1252', 'Name': 'Sanket Patil', 'Class': '11 C', 'DOB': '7 Oct 2000', 'ParentName': 'Stephen Vincent', 'Mob': '90 402 9959', 'Address': 'Shegaon Maharashtra' },
        { 'id': 'PRE1434', 'Name': 'Rohit Sharma', 'Class': '10 A', 'DOB': '4 Jan 2002', 'ParentName': 'Kelley Joeeee', 'Mob': '402 221 7523', 'Address': 'viman nagar Pune' },
        { 'id': 'PRE2143', 'Name': 'M.S Dhoni', 'Class': '20 A', 'DOB': '12 Apr 2002', 'ParentName': 'Jeffrey Scott', 'Mob': '026 7318 4366', 'Address': 'Akola ' },
        { 'id': 'PRE4747', 'Name': 'Raaaaj Patil', 'Class': '50 Z', 'DOB': '20 Apr 2000', 'ParentName': 'Mr Perfect', 'Mob': '508 7318 4366', 'Address': 'Nagpur ' },
        { 'id': 'ABC4373', 'Name': 'Akshay Patil', 'Class': '70 Z', 'DOB': '20 Apr 2003', 'ParentName': 'Gautam Patil', 'Mob': '200 7318 4366', 'Address': 'Royal Palace' },
        { 'id': 'DEF3344', 'Name': 'Gopal Patil', 'Class': '30 Z', 'DOB': '2 Jan 2003', 'ParentName': 'Amol Patil', 'Mob': '200 7318 4366', 'Address': 'Wahala bk' },
    ];

    useEffect(() => {
        setUserProfile(studentDetail);
    }, []);

    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <div className={`table-responsive ${styles.mainwrapper}`}>
                    <table className="table table-bordered table-dark">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Class</th>
                                <th>DOB</th>
                                <th>Parent Name</th>
                                <th>Mob</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userProfile?.map((item, index) => (        // ? optinal dil input nvt bhetat mhanun //
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.Class}</td>
                                    <td>{item.DOB}</td>
                                    <td>{item.ParentName}</td>
                                    <td>{item.Mob}</td>
                                    <td>{item.Address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default StudentList;




















// *************************************************** Practice - code ************************************************************************  //


//  import React, { useEffect, useState } from "react";

// import styles from './StudentList.module.scss';

// // import studentListImg from '../../../Assest/Images/StudentList-img.png';


// const StudentList = () => {

//     const [userProfile, setUserProfile] = useState();
//     // console.log('userProfile@@@@@######', userProfile);        

//     const studentDetail = [
//         { 'id': 'PRE1234', 'Name': 'Sanket Patil', 'Class': '10 B', 'DOB': '26 Apr 1994', 'ParentName': 'Stephen Marley', 'Mob': '77 3499 9959', 'Address': '86 Lamphey Road' },      // new
//         { 'id': 'PRE1252', 'Name': 'Rohit Patil', 'Class': '11 C', 'DOB': '7 Oct 2000', 'ParentName': 'Stephen Vincent', 'Mob': '90 402 9959', 'Address': 'Ashwood Drive' },
//         { 'id': 'PRE1434', 'Name': 'Ravi Patil', 'Class': '10 A', 'DOB': '4 Jan 2002', 'ParentName': 'Kelley Joeeee', 'Mob': '402 221 7523', 'Address': 'Ramwadi Pune' },
//         { 'id': 'PRE2143', 'Name': 'Raaj Patil', 'Class': '20 A', 'DOB': '12 Apr 2002', 'ParentName': 'Jeffrey Scott', 'Mob': '026 7318 4366', 'Address': 'Akola Bypass' },
//         { 'id': 'PRE4747', 'Name': 'Amol Patil', 'Class': '50 Z', 'DOB': '20 Apr 2000', 'ParentName': 'Mr Perfect', 'Mob': '508 7318 4366', 'Address': 'Nagpur Bypass' },
//         { 'id': 'ABC4373', 'Name': 'Maxwell Aust', 'Class': '70 Z', 'DOB': '20 Apr 2003', 'ParentName': 'Gautam Patil', 'Mob': '200 7318 4366', 'Address': 'Shegaon Bypass' },
//         { 'id': 'DEF3344', 'Name': 'John India', 'Class': '30 Z', 'DOB': '2 Jan 2003', 'ParentName': 'Amol Patil', 'Mob': '200 7318 4366', 'Address': 'Khamgaon Bypass' },
//     ];


//     useEffect(() => {
//         setUserProfile(studentDetail);        
//     }, [])


//     return (
//         // <div>
//         //     <div className={`${styles.studentListContainer} d-flex justify-content-center align-items-center`}>
//         //         <img src={studentListImg} alt="Student List" className={styles.image} />
//         //     </div>

//         // </div>


//         // <div className={styles.studentListContainer}>
//         //     <div className="d-flex justify-content-center align-items-center h-100">
//         //         <img src={studentListImg} alt="Student List" className={styles.image} />
//         //     </div>
//         // </div>

//         <div>

//             {userProfile?.map((item,index) => {                                         // optional bnvl ? deun ( input nvt bhetat mhanun)  //
//                 return <div className={styles.mainwrapper} key={index} >
//                     <p>id:<span>{item.id}</span></p>
//                     <p>Name:<span>{item.Name}</span></p>
//                     <p>Class:<span>{item.Class}</span></p>
//                     <p>DOB:<span>{item.DOB}</span></p>
//                     <p>ParentName:<span>{item.ParentName}</span></p>
//                     <p>Mob:<span>{item.Mob}</span></p>
//                     <p>Address:<span>{item.Address}</span></p>
//                 </div>
//             })}

//         </div>
//     )
// }


// export default StudentList;






// // <div className={`${styles.studentListContainer}`}></div>




// import React, { useEffect, useState } from "react";
// import styles from './StudentList.module.scss';

// const StudentList = () => {
//     const [studentDetails, setStudentDetails] = useState([]);

//     const studentDetail = [
//         { 'id': 'PRE1234', 'Name': 'Nathan Humphries', 'Class': '10 B', 'DOB': '26 Apr 1994', 'ParentName': 'Stephen Marley', 'Mob': '77 3499 9959', 'Address': '86 Lamphey Road' },
//         { 'id': 'PRE1252', 'Name': 'Prince Patil', 'Class': '11 C', 'DOB': '7 Oct 2000', 'ParentName': 'Stephen Vincent', 'Mob': '90 402 9959', 'Address': 'Ashwood Drive' },
//         { 'id': 'PRE1434', 'Name': 'Rohit Patil', 'Class': '10 A', 'DOB': '4 Jan 2002', 'ParentName': 'Kelley Joeeee', 'Mob': '402 221 7523', 'Address': 'Ramwadi Pune' },
//         { 'id': 'PRE2143', 'Name': 'Levell Scott', 'Class': '20 A', 'DOB': '12 Apr 2002', 'ParentName': 'Jeffrey Scott', 'Mob': '026 7318 4366', 'Address': 'Akola Bypass' },
//         { 'id': 'PRE4747', 'Name': 'Mr Roy Delhi', 'Class': '50 Z', 'DOB': '20 Apr 2000', 'ParentName': 'Mr Perfect', 'Mob': '508 7318 4366', 'Address': 'Nagpur Bypass' },
//         { 'id': 'ABC4373', 'Name': 'Maxwell Aust', 'Class': '70 Z', 'DOB': '20 Apr 2003', 'ParentName': 'Gautam Patil', 'Mob': '200 7318 4366', 'Address': 'Shegaon Bypass' },
//         { 'id': 'DEF3344', 'Name': 'John India', 'Class': '30 Z', 'DOB': '2 Jan 2003', 'ParentName': 'Amol Patil', 'Mob': '200 7318 4366', 'Address': 'Khamgaon Bypass' },
//     ];

//     useEffect(() => {
//         setStudentDetails(studentDetail);
//     }, []);

//     return (
//         <div className={styles.studentListContainer}>
//             <h1>Student List</h1>
//             <table className={styles.studentTable}>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Class</th>
//                         <th>Date of Birth</th>
//                         <th>Parent Name</th>
//                         <th>Mobile</th>
//                         <th>Address</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {studentDetails.map((student, index) => (
//                         <tr key={index}>
//                             <td>{student.id}</td>
//                             <td>{student.Name}</td>
//                             <td>{student.Class}</td>
//                             <td>{student.DOB}</td>
//                             <td>{student.ParentName}</td>
//                             <td>{student.Mob}</td>
//                             <td>{student.Address}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default StudentList;