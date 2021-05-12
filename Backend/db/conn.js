const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/signup",{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connection is successfully...");
}).catch((e) => {
    console.log("No Connection");
})