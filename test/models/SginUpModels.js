const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema(
    {
        fullName:
        {
            type:String,
            required:true
        },
        gender:
        {
            type:String,
            default:'Female',
            required:true
        },
        birthDate:
        {
            type:Date,
            default:Date.now,
        },
        email:
        {
            type:String,
            required:true
        },
        phoneNumber:
        {
            type:String,
            required:true
        },
        password:
        {
            type:String,
            required:true
        }
    },
    {
        collection:'patient'
    }
)

module.exports = mongoose.model('patient',patientSchema)