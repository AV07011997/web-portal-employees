import express from "express"
import cors from "cors"
import mongoose from "mongoose"




const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())





mongoose.connect("mongodb://localhost:27017/myloginDB" , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})


const userSchema = mongoose.Schema({
    userid: String,
    password: String,
})


// const personalinfoSchema = mongoose.Schema({
//     employee_Code : String,
//     full_name :  String,
//     gender : String,
//     marital_status : String,
//     fathers_name : String,
//     mothers_name : String,
//     contact_number : String, 
//     dob : String,
//     age : String,
//     place_of_birth : String,
//     current_address : String,
//     current_city : String,
//     current_district : String,
//     current_state : String,
//     current_pincode : String,
//     cermanent_Address : String,
//     permanent_city : String,
//     permanent_district : String,
//     permanent_state : String,
//     permanent_pincode : String,
//     Personal_email_id : String,
//     skype_id : String,
//     linkedin_handle : String,
//     blood_group : String,
//     emergency_contact_person : String,
//     relationship : String,
//     emergency_contact_no : String,



// })

const User = new mongoose.model("User",userSchema)

// const PersonalDetails = new mongoose.model("PersonalDetails", personalinfoSchema)




// Routes

app.post("/login", (req,res)=> {


    const {userid,password} = req.body

    const user= new User({
        userid:userid,
        password:password
    })
    
    User.findOne({userid: userid}, (err, user) =>{
        if(user){
            if(password=== user.password){

                res.send({message: "Login is Successfull", user: user})
            } else {
                res.send({ message: "Password is incorrect"},null)
            }
            
        } else {
            res.send({message: "User not registered"})
        }
    })

})

// app.post("/personaldetails", (req,res)=> {

//     const {employee_code, full_name,gender,marital_status,fathers_Name,mothers_Name,contact_Number, dob,age,place_of_birth,current_address,current_city ,current_district, current_state, current_pincode, permanent_address, permanent_city, permanent_district, permanent_state , permanent_pincode ,personal_email_id,skype_id , linkedin_handle , blood_group , emergency_contact_person ,relationship, emergency_contact_no } = req.body


//     const personalInfo= new PersonalDetails ({

//         employee_code : employee_code,
//         full_name :  full_name  ,
//         gender : gender,
//         marital_status : marital_status,
//         fathers_Name : fathers_Name,
//         mothers_name : mothers_Name,
//         contact_number : contact_Number, 
//         dob : dob,
//         age : age,
//         place_of_birth : place_of_birth,
//         current_address : current_address,
//         current_city : current_city,
//         current_district : current_district,
//         current_state : current_state,
//         current_pincode : current_pincode,
//         permanent_address : permanent_address,
//         permanent_city : permanent_city,
//         permanent_district : permanent_district,
//         permanent_state : permanent_state ,
//         permanent_pincode : permanent_pincode,
//         personal_email_id : personal_email_id ,
//         skype_id : skype_id,
//         linkedin_handle : linkedin_handle,
//         blood_group : blood_group,
//         emergency_contact_person : emergency_contact_person,
//         relationship : relationship,
//         emergency_contact_no : emergency_contact_no,   
//     })

//     personalInfo.save(function(err, Details) {
//         if (err){
//             res.send(err)
//         }
//         else{
//             res.send({message: "Personal Details successfully saved!"})
//         }
//     })
// })

app.listen(9002,()=> {
    console.log("BE  started at port 9002")
})