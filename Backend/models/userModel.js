const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        age: { type: Number }
        // role: {
        //     type: String,
        //     enum: ['banker', 'customer'],
        //     required: true,
        //     default: "user"
        // },
    },

    {
        timestamps: true,
    });

const Usermodel = mongoose.model("user", userSchema);

module.exports = Usermodel;