import * as express from "express";
import { Client } from "../entity/Client";
import { Transaction, TransactionTypes } from "../entity/Transactions";
import { AppDataSource } from "../data-source";

const router = express.Router();

router.post("/api/client/:clientId/transaction",async (req,res)=>{
    const {clientId} = req.params;
    const {type,amount} = req.body;
 
    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOneBy({id :clientId});

    if(!client){
        return res.json({
            msg: "client not found"
        });
    }

    
    const transaction = new Transaction()
    transaction.type = type,
    transaction.amount = amount,
    transaction.client = client,

    await AppDataSource.manager.save(transaction);
    
    if (type === TransactionTypes.DEPOSIT){
        client.balance = client.balance + amount;
    }else if (type === TransactionTypes.WITHDRAW){
        client.balance = client.balance - amount;
    }

    await AppDataSource.manager.save(client);

    return res.json({
        msg: "transaction added"
    });


})

export{
    router as createTransactiontRouter
}