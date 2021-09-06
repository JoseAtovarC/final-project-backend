import { validateLogin } from "../model.js";


export const retrieveUserInfoCtrl = async (req, res) => {

    const userInfo = await validateLogin(req.email);
    delete userInfo[0].password;
    res.send(userInfo);
}