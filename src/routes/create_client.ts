import * as express from "express";
import { Client } from "../entity/Client";
import { AppDataSource } from "../data-source";
import { validate } from "class-validator"
import { send } from "process";


const router = express.Router();

router.post('/api/client', async(req,res)=>{
    const {
        firstName,
        lastName,
        email,
        cardNumber,
        balance,
        age
    } = req.body;

    const client = new Client()
    client.firstName = firstName,
    client.lastName = lastName,
    client.email = email,
    client.card_number = cardNumber,
    client.balance = balance,
    client.age = age
    
    
    const errors = await validate(client)
    if (errors.length > 0) {
        throw new Error(`Validation email failed!`)
    } else {
        await AppDataSource.manager.save(client);
        return res.json(client);
    }
    
});

export{
    router as createClientRouter
}