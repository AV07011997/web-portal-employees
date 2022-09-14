import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./personaldetails.css"  
import axios from "axios" 

const Personaldetails = ({ setpersonaldetails }) => {

    const navigate = useNavigate()

    const [personaldetailsuser,setpersonaldetailsuser] = useState({
        employee_code:"",
        full_name:"",
        gender:"",
        marital_status:"",
        fathers_name:"",
        mothers_name:"",
        contact_number:"",
        personal_email_id:"",
        dob:"",
        blood_group:"",
        permanent_address:"",
        current_address:""
    })
    const handlechange=e=>{
        const{name,value}=e.target
        setpersonaldetailsuser({
            ...personaldetailsuser,
            [name]:value
        })
    }
    const saveandnext=()=>{
        axios.post("http://localhost:9002/personaldetails", personaldetailsuser)
        .then(res => {
            if(personaldetailsuser){
            alert(res.data.message)
            setpersonaldetailsuser(res.data.personaldetailsuser)
            navigate("/documentationdetails")}
        })


    }
    return (
        <div>
        <div className="box"><h2 >Employee Personal Details</h2></div>
        <div className="detail">
            
               <table>
                <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                   
                    <td>
                    <input type="text" value={personaldetailsuser.employee_code} onChange={handlechange} placeholder="Code" name="employee_code"></input>
                    </td>
                    </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Full Name:
                    </td>
                    <td>
                    <input type="text" value={personaldetailsuser.full_name} onChange={handlechange}  placeholder="Name" name="full_name"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                        Gender:
                    </td>
                    <td>
                    <div>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                        Marital Status:
                    </td>
                    <td>
                    <input type="radio"  value="Unmarried"/>Umarried
                    <input type="radio"  value="Married"/>Married
                    <input type="radio"  value="Divorced"/>Divorced
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Father's Name:
                    </td>
                    <td>
                    <input type="text"  value={personaldetailsuser.fathers_name} onChange={handlechange} placeholder="fathers_name" name=""></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Mother's Name:
                    </td>
                    <td>
                    <input type="text" value={personaldetailsuser.mothers_name} onChange={handlechange} placeholder="Name" name="mothers_name"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Contact Number:
                    </td>
                    <td>
                    <input type="number"  value={personaldetailsuser.contact_number} onChange={handlechange} placeholder="9471***" name="contact_number"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Personal Email ID:
                    </td>
                    <td>
                    <input type="email" value={personaldetailsuser.personal_email_id} onChange={handlechange} placeholder="example1@***" name="personal_email_id"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOB:
                    </td>
                    <td>
                    <input type="date" value={personaldetailsuser.dob} onChange={handlechange} name="dob"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Blood Group:
                    </td>
                    <td>
                        <select>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                        Permanent Address:
                    </td>
                    <td>
                    <textarea rows="3" cols="50" value={personaldetailsuser.permanent_address} onChange={handlechange} placeholder="Permanent Address" name="permanent_address"></textarea>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                    Is permanent address<br></br>
                    same as current address:
                    </td>
                    <td>
                    <input type="radio"  value="Yes"/>Yes
                    <input type="radio"  value="No"/>No
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                <td>
                    Current Address:
                </td>
                <td>
                <textarea rows="3" cols="50" value={personaldetailsuser.current_address} onChange={handlechange} placeholder="Current Address" name="current_address"></textarea>
            </td>
            </tr>
            </tbody>
        </table>
        </div>
        <div>
            <button type="submit" onClick={saveandnext}>Save and next</button>
        </div>
                
    </div> )
    } 

export default Personaldetails