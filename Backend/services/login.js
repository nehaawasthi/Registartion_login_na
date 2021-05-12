const Users = require("../model/users");


const userLogin = (data)=>{
    var newUser = new Users(data);
    // data.password = bcrypt.hashSync(newUser.password, 10);
    return new Promise(async (resolve, reject) => {
        try {
            const getData = await Users.find({ "email": data.email});
            console.log('getData>>>>>>>>>>',getData[0].email);
        if(getData){
            console.log('user',getData[0].email,getData[0].password);
            console.log('body',data.email,data.password);
            if (getData[0].email== data.email && getData[0].password == data.password) {
                return resolve('USER LOGIN SUCCESS');
              }
              else{
                return resolve('User name or password not match');
              }
        }
       
          else{
            return resolve('USER NOT FOUND');
          }
        } catch (error) {
          return reject(error);
        }
})
}
module.exports={userLogin} ;
