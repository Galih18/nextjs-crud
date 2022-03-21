const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    email: {
        type:String,
        required:true
    },
    phone: {
        type:Number,
        required: true
    },
});


export default mongoose.models.User || mongoose.model("User",userSchema);