
// register controller
import User from "../models/user.js";

export const register = async (req, res) => {
    try {
        const userData = req.body;
        console.log(req.body);


        // 1️ Basic validation
        if (!userData.mobile || !userData.role) {
            return res.status(400).json({
                success: false,
                message: "Phone number and role are required",
            });
        }

        // 2️ Role validation
        if (!["farmer", "truck"].includes(userData.role)) {
            return res.status(400).json({
                success: false,
                message: "Invalid role",
            });
        }

        // 3️ Check existing user (phone OR email)
        const existingUser = await User.findOne({
            $or: [
                { mobile: userData.mobile },
                userData.email ? { email: userData.email } : null,
            ].filter(Boolean),
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already registered",
            });
        }

        // 4️ Create new user
        const user = await User.create({
            name: userData.name,
            email: userData.email,
            mobile: userData.mobile,
            role: userData.role,
        });

        // 5️ Success response
        return res.status(201).json({
            success: true,
            message: "Registration successful",
            userData,
        });

    } catch (error) {
        console.error("Register Error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error during registration",

        });
    }
};



// login controller 
export const login = async (req, res) => {

    const { mobile, password } = req.body;

    console.log(req.body);

    const user = await User.findOne({ mobile });

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found",
        });
    }

    return res.status(200).json({
        success: true,
        message: "Login successful",
        userData: user,
    });
}



// logout controller
export const logout = (req, res) => {
    // logout logic here
    res.send("Logout endpoint");
}