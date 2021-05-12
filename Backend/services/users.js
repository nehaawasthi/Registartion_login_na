const Users = require("../model/users");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const addUsers = (usersInfo)=>{
    var newUser = new Users(usersInfo);
    // newUser.password = bcrypt.hashSync(usersInfo.password, 10);
    console.log('newuser password',newUser);
    return new Promise(async (resolve, reject) => {
        try {
            const userAdded = await Users.insertMany(newUser);
        if (userAdded) {
            return resolve('User Added Successfully......');
          }
        } catch (error) {
          return reject(error);
        }
})
}
module.exports={addUsers} ;