import './App.css';
import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import GetStart from './Pages/GetStart';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import ProfileCreate from './Pages/ProfileCreate';
import Dashboard from './data/Dashboard';
import CurrentServices from './data/CurrentServices';
import GigCategory from './Pages/GigCategory';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProtectedRoute from './data/ProtectedRoute';
import NotFound from './Pages/NotFound';

function App() {

  useEffect (() => {
    axios.get("https://prolinker-backend.onrender.com/")
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  })

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getstarted" element={<GetStart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />


          {/* <Route path="/profilecreate" element={<ProfileCreate />}/> */}

            <Route path="/profilecreate" element={
                <ProtectedRoute>
                  <ProfileCreate />
                </ProtectedRoute>
          } />

          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/currentservices" element={<CurrentServices />} />
          <Route path="/:category" element={<GigCategory />}/>

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
