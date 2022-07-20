import * as express from "express";
import { Client } from "../entity/Client";
import { AppDataSource } from "../data-source";

const router = express.Router();


router.get('/api/clients', async (req,res)=>{
    const clientRepository = AppDataSource.getRepository(Client);

    //const client = await clientRepository.find();
    const client = await AppDataSource
    .createQueryBuilder()
    .select("client.firstName")
    .from(Client, "client")
    .where("client.active = :active", { active: true })
    .getMany()


    return res.json(client);


})

export{ router as fetchClientRouter}