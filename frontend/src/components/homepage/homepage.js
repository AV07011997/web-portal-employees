import React from "react"
import "./homepage.css"
import { useNavigate } from 'react-router-dom'

const Homepage = ({setLoginUser}) => {
    const navigate=useNavigate()

    const personaldetails = () => {      
         navigate("/personaldetails")
    }
    
        
    return (
<div>
    <head>        
        <title>Homepage Dhurin</title>
        <link rel="stylesheet" href="homepg.css"/>
    </head>
    <body>
        <div className = "logo"><img src="logo.png" alt="logo" width="250" height="100"></img></div><br></br>
        <div className="container">
        
         <button id = "btn" type="submit" onClick={personaldetails}>Add Employee</button>&nbsp;&nbsp;&nbsp;&nbsp; 
         <button type="submit" onClick={() => setLoginUser({})}>Logout</button><br></br><br></br>
         <table className="employee-data"> 
             <thead>
                 <tr>
                     <th>Employee ID</th>
                     <th>Employee Name</th>
                     <th>Designation</th>
                     <th>Office City</th>
                     <th>Date of Joining</th>
                     <th>Edit option</th>
                    
                 
                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>DH001</td>
                     <td>Abhishek</td>
                     <td>BA</td>
                     <td>Noida</td>
                     <td>18-07-2022</td>
                     <button>Edit</button>
                 </tr>
                 <tr>
                     <td>DH001</td>
                     <td>Abhishek</td>
                     <td>BA</td>
                     <td>Noida</td>
                     <td>18-07-2022</td>
                     <button>Edit</button>
                 </tr>
                 <tr>
                     <td>DH002</td>
                     <td>Armandeep</td>
                     <td>BA</td>
                     <td>Noida</td>
                     <td>18-07-2022</td>
                     <button>Edit</button>
                 </tr>
                 
             </tbody>
         </table><br></br>
         </div>
         </body>
         </div>
    
    )
}

export default Homepage

