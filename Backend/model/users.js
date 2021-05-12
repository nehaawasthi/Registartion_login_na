const mongoese = require("mongoose");
const validator = require("validator");
bcrypt = require('bcrypt');

const Users = new mongoese.Schema({

    name: {
        type: String,
        required: true,
        minlength: 3
    },

    lName: {
        type: String,
        minlength: 3,
    },
    
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email id not valid")
            }
        }
    },
    country: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        min: 10,
        required: true
    }

});

Users.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}
const User = new mongoese.model("User", Users);

module.exports = User;