import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from './component/Navbar';
import Home from './component/Home';
import Register from './component/Register';
import Edit from './component/Edit';
import Details from './component/Details';
import Attendance from './component/Attendance';
import AllDetails from './component/AllDetails.js';
import Login from "./component/Login.js";
import withAuth from "./component/withAuth.js";
import Attendances from "./component/Attendances.js"
import ThemeProvider from './component/ThemeProvider.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const ProtectedHome = withAuth(Home);
const ProtectedRegister = withAuth(Register);
const ProtectedEdit = withAuth(Edit);
const ProtectedAttendance = withAuth(Attendance);
const ProtectedDetails = withAuth(Details);
const ProtectedAllDetails = withAuth(AllDetails);
const ProtectedAttendaces = withAuth(Attendances);
function App() {
  return (
    <>
    <ThemeProvider>
      <Toaster />
      <Navbar />
      <Router>
        <Routes>
          <Route exact path='/home' element={<ProtectedHome />} />
          <Route exact path='/Register' element={<ProtectedRegister />} />
          <Route exact path='/Edit/:id' element={<ProtectedEdit />} />
          <Route exact path='/Details/:id' element={<ProtectedDetails />} />
          <Route exact path='/Attendance' element={<ProtectedAttendance />} />
          <Route exact path='/Details' element={<ProtectedAllDetails />} />
          <Route exact path='/Attendances' element={<ProtectedAttendaces />} />
          <Route exact path='/Login' element={<Login />} />
        </Routes>
      </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
