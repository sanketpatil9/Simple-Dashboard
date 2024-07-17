import React from "react";
import { Route, Routes } from "react-router-dom";



import Dashboard from "../Dashboard";
import StudentList from "../StudentList";
import StudentView from '../StudentView';
import StudentAdd from "../StudentAdd";
import StudentEdit from "../StudentEdit";
import ImportList from "../ImportList";
import ExportList from "../ExportList";






const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/StudentList" element={<StudentList />} />
        <Route path="/StudentView" element={<StudentView />} />
        <Route path="/StudentAdd" element={<StudentAdd />} />
        <Route path="/StudentEdit" element={<StudentEdit />} />
        <Route path="/ImportList" element={<ImportList />} />
        <Route path="/ExportList" element={<ExportList />} />
      </Routes>
    </div>
  );
};

export default Routers;
