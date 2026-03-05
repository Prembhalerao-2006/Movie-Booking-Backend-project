const mongoose = require('mongoose');


const theatreSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:5
    },
    discription:String,
    city:{
        type:String,
        required:true
    },
    pinCode:{
        type:Number,
        required:true
    },
    address: String,
    movies :{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'movie'
    }

}, {timestamps:true});

const Theatre = mongoose.model('Theatre', theatreSchema);

module.exports = Theatre;