import React,{useState} from 'react';

import {
    FaTh,
    FaBars,
    FaBook,
    FaBookMedical,
    FaTrashAlt


}from "react-icons/fa"; 
import {NavLink} from 'react-router-dom';

function SideNavBar({children}){
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [

            {
                path: "/DashBoard",
                name: "dashboard",
                icon: <FaTh/>
            },

            
            {
                path: "/ViewBooks",
                name: "View Books",
                icon: <FaBook />
            },

            
            {
                path: "/AddBook",
                name: "Add Book",
                icon: <FaBookMedical />

            },

            
            {
                path: "/DeleteBook",
                name: "Delete Book",
                icon: <FaTrashAlt /> 
            },

            


        ]

    return(

        <div className="my_box">
            <div style={{width: isOpen ? "200px": "50px"}} className="sidebar">
               <div className ="top_section">
                <h1 style={{display: isOpen ? "block": "none"}} classNAme="logo" >Logo</h1>
                <div style={{marginLeft: isOpen ? "50px": "0px"}} className="bars">
                    <FaBars onClick ={toggle}/>
                </div>
                
               </div>
               {

                 menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link"activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{width: isOpen ? "300px": "50px"}} className="link_text">{item.name}</div>   
                    </NavLink>
                 ))
               }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default SideNavBar;