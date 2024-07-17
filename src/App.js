import logo from "./logo.svg";
import "./App.css";

import LeftSection from "./Components/LeftSection";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Dashboard from "./Container/Pages/Dashboard";
import StudentList from "./Container/Pages/StudentList";
import StudentView from "./Container/Pages/StudentView";
import StudentAdd from "./Container/Pages/StudentAdd";
import StudentEdit from "./Container/Pages/StudentEdit";
import ImportList from  './Container/Pages/ImportList';

import Routers from "./Container/Pages/Routers/Routers";


function App() {
  return (
    <div className="App">
      <div>
        <div> <LeftSection /></div>
          
        <div> <Header /></div>

        {/* <div> <StudentList /></div> */}
        {/* <div><Dashboard /></div> */ }
        {/* <div> <StudentView /> </div> */}
        {/* <StudentAdd /> */}
        {/* <StudentEdit /> */}
        {/* <ImportList /> */}


        
        <div> <Routers /> </div>
        <div> <Footer /> </div>





      </div>
    </div>



  );
}

export default App;
