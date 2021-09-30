import {retrieveHelpersInfo} from './dataModel.js'

 export const retriveHelpersInfoCtrl = async (req, res) => {

    const helperInfo = await retrieveHelpersInfo();
     helperInfo.map(v=> delete v.password);
     
    res.send(helperInfo);
 }

