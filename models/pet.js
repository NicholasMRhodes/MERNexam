const mongoose = require("mongoose");
const PetSchema = new mongoose.Schema({

    name:{
        type: String,
        required:[true, "Pet name is required"],
        minlength: [3, "Pet name must be at least 3 characters long"],
    },
    type:{
        type: String,
        required:[true, "Type of pet is required"],
        minlength: [3, "Type of pet must be at least 3 characters long"]
    },
    description:{
        type: String,
        required:[true, "Description of pet is required"],
        minlength: [3, "Description of pet must be at least 3 characters long"]
    },
    skill1:{
        type: String
    },
    skill2:{
        type: String
    },
    skill3:{
        type: String
    },
}, {timestamps: true});

mongoose.model("Pet", PetSchema);