import * as express from "express";
import { Banker } from "../entity/Banker";
import { AppDataSource } from "../data-source";

const router = express.Router();

router.post('/api/banker', async(req,res)=>{
    const {
        firstName,
        lastName,
        email,
        cardNumber,
        employee_number,
        age
    } = req.body;

    const banker = new Banker()
    banker.firstName = firstName,
    banker.lastName = lastName,
    banker.email = email,
    banker.card_number = cardNumber,
    banker.employee_number = employee_number,
    banker.age = age,    

    await AppDataSource.manager.save(banker);
    return res.json(banker); 

});

export{
    router as createBankerRouter
}