import * as express from "express";
import { Client } from "../entity/Client";
import { AppDataSource } from "../data-source";

const router = express.Router();

router.delete('/api/client/:clientId', async(req,res)=>{
    const {clientId} = req.params;

    const clientRepository = AppDataSource.getRepository(Client);
    const client = await clientRepository.delete({id :clientId});
    return res.json(client);

});

export{
    router as deleteClientRouter
}