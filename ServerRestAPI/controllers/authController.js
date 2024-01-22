 const signUpController = async(req, res) =>{
    res.status(200).json({
        status: true,
        message: "signed up successfully"
    })
}
 const logInController = async(req, res) =>{
    res.status(200).json({
        status: true,
        message: "logged In successfully"
    })
}
 const logOUtController = async(req, res) =>{
    res.status(200).json({
        status: true,
        message: "LogOUt successfully"
    })
}
 const forgetPasswordController = async(req, res) =>{
    res.status(200).json({
        status: true,
        message: "forget password successfully"
    })
}

export{signUpController, logInController, logOUtController, forgetPasswordController}