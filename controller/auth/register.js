const User=require("../../models/User.model");

const register=async(req,res,next)=>{
    try{
        console.log(req.body);
    const {username,email,password,age,phone}=req.body;
    

    const existEmail=await User.findOne({email});

    if(existEmail){
        return res.status(400).json({
            message:"Email already exist"
        })
    }

    const newUser=new User({
        username,
        email,
        password,
        age,
        phoneNumber:phone
    })
    await newUser.save();

     res.status(200).json({
            success: true,
            message: "User registered successfully",
            data: newUser,
          });

        }
        catch(error){
            console.log(error);
            
        }
 
}

module.exports=register;