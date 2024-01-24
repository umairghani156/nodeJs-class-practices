export const logout = (req, res)=>{
    res.status(200).json({
        status: true,
        message: "logged Out successfully"
    });
};
export const forgetpassword = (req, res)=>{
    res.status(200).json({
        status: true,
        message: "forget password got successfully"
    });
};
export const dtlfunc = (req, res)=>{
    res.status(200).json({
        status: true,
        message: "deleted successfully"
    });
};
