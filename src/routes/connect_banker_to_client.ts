import * as express from "express";
import { Client } from "../entity/Client";
import { AppDataSource } from "../data-source";
import { Banker } from "../entity/Banker";
import { ADDRGETNETWORKPARAMS } from "dns";

const router = express.Router();

router.put("/api/banker/:bankerId/client/:clientId",async (req,res)=>{
    const {bankerId, clientId} = req.params;

    const clientRepository = AppDataSource.getRepository(Client);
    const client = await clientRepository.findOneBy({id :clientId});

    const bankerRepository = AppDataSource.getRepository(Banker);
    const banker = await bankerRepository.findOneBy({id :bankerId});

    if(!banker || !client){
        return res.json({
            msg:"Banker or client not found"
        })
    }

    banker.clients = [
        client
    ]

    await AppDataSource.manager.save(banker);

    return res.json({
        msg:"Banker connected to client"
    })


})

export{
    router as connectBankerToClientRouter 
}