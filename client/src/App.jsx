import {   Route, Routes } from "react-router-dom"
import { Home } from "./pages/home/Home"
// import { Contact } from "./pages/home/Contact"
// import { Layout } from "./component/Layout"
import { AdminLogin } from "./pages/admin/AdminLogin"
import { AdminSignup } from "./pages/admin/AdminSignup"
// import { AdminDashboard } from "./pages/admin/AdminDashboard"
import { StudentSignUp } from "./pages/students/StudentSignUp"
import {  StudentNavbar } from "./pages/students/StudentNavBar"
// import { StudentResult } from "./pages/students/StudentResult"
import { StudentAttendance } from "./pages/students/StudentAttendance"
import StudentRoutin from "./pages/students/StudentRoutin"
import { SelectRoll } from "./pages/home/SelectRoll"
import Navbar from "./component/Navbar"
import { AdminHome } from "./pages/admin/AdminHome"
import AdminClass from "./pages/admin/AdminClass"
import { AdminSubject } from "./pages/admin/AdminSubject"
import { AdminTeacher } from "./pages/admin/AdminTeacher"
import { AdminStudent } from "./pages/admin/AdminStudent"
import { AdminNotice } from "./pages/admin/AdminNotice"
import { AdminComplaint } from "./pages/admin/AdminComplaint"

function App() {

  return (
    <>
      
        <Routes >
            <Route exact >
              <Route path="/" element={<Home/>}/>
              <Route path="/select-roll" element={<SelectRoll/>}/>
            <Route path="admin-login" element={<AdminLogin/>}/>
            <Route path="admin-signup" element={<AdminSignup/>}/>
            {/* <Route path="admin-dashboard" element={<AdminDashboard/>}/> */}
            <Route path="student-signup" element={<StudentSignUp/>}/>
            <Route path="student-login" element={<AdminLogin/>}/>
            </Route>
        </Routes>
        <Routes>
          <Route path="/admin" exact element={<Navbar/>}>
            <Route path="home" element={<AdminHome/>}/>
            <Route path="class" element={<AdminClass/>}/>
            <Route path="subject" element={<AdminSubject/>}/>
            <Route path="teacher" element={<AdminTeacher/>}/>
            <Route path="teacher" element={<AdminTeacher/>}/>
            <Route path="teacher" element={<AdminTeacher/>}/>
            <Route path="student" element={<AdminStudent/>}/>
            <Route path="notice" element={<AdminNotice/>}/>
            <Route path="complaints" element={<AdminComplaint/>}/>
          </Route>
        </Routes>
        <Routes>
          <Route path="/student" exact element={<StudentNavbar/>}>
            {/* <Route path="result" element={<StudentResult/>}/> */}
            <Route path="attendance" element={<StudentAttendance/>}/>
            <Route path="routin" element={<StudentRoutin/>}/>
          </Route>
        </Routes>
     
    </>
  )
}

export default App
