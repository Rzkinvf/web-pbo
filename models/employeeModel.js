import mongoose from "mongoose";

const Employee = mongoose.Schema({
    employeeName : String,
    position : String,
    skill: String, 
  imgPath : String 
    },
    {
    collection : 'employees'
    })

export default mongoose.model('employee', Employee)