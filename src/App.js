import React from 'react';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/navbars/Footer';
import HeadNavBar from './components/navbars/HeadNavBar';
import SideNavBar from './components/navbars/SideNavBar';
import Login from './components/Login';
import Register from './components/Register';
import AddBook from './components/AddBook';
import ViewBooks from './components/ViewBooks';
import DeleteBook from './components/DeleteBook';
import DashBoard from './components/DashBoard';
import Layout from './components/Layout';
import NoPage from './components/NoPage';





function App() {
  return (
    
    <BrowserRouter>
    <HeadNavBar/>
    <Footer/>
    <SideNavBar>
    <Routes>
      <Route path="/" element={<Layout/>} />
      <Route index element={<Login/>} />
      <Route path="Register" element={<Register/>} />
      <Route path="DashBoard" element={<DashBoard/>} />
      <Route path="SideNavBar" element={<SideNavBar/>} />
      <Route path="HeadNavBar" element={<HeadNavBar/>} />
      <Route path="Footer" element={<Footer/>} />
      <Route path="*" element={<NoPage/>} />
      <Route path="AddBook" element={<AddBook/>} />
      <Route path="ViewBooks" element={<ViewBooks/>} />
      <Route path="DeleteBook" element={<DeleteBook/>} />


    </Routes>
    </SideNavBar>
    </BrowserRouter>
  );
};

export default App;



