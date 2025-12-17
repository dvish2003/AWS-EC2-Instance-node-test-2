import User from "../model/User.js";

export const saveUser = async (req, res) => {
     try{
         const user = new User(req.body)
         const existisUser = await User.findOne({ email: user.email })
        if(existisUser){
            console.log(existisUser)
            return res.status(400).json({message: "User already exists"})
        }
        const savedUser = await user.save();
        return res.status(200).json(
            {
                message: "User saved successfully",
                user : savedUser
            }
        )
     }catch(err){
        return res.status(500).json({message: "Internal server error"})
     }
};  

export const getAllUsers = async (req, res) => {
    try{
        const users = await User.find({});
        return res.status(200).json(
            {
                message: "Users fetched successfully",
                users : users
            }
        )
     }catch(err){
        return res.status(500).json({message: "Internal server error"})
     }
};