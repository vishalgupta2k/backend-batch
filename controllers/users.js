const User = require("../modals/Users");

const signUp = async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;
  if (!name || !email || !phoneNumber || !password) {
    return res.send({ sucess: false, message: "All fields are required" });
  }

  // const oldUser = await User.findOne({ email });
  // if (oldUser) {
  //   return res.send({ sucess: false, message: "User already exist" });
  // }
  // const user = new User({
  //   name,
  //   email,
  //   phoneNumber,
  //   password,
  // });
  // await user.save();

  res.send({ sucess: true, message: "user created" });
  console.log(req.body);
};

module.exports = { signUp };

// app.get("/",(req,res)=>{

// })
