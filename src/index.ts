import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import * as express from "express";

import {createClientRouter} from "./routes/create_client";
import { createBankerRouter } from "./routes/create_banker";
import { createTransactiontRouter } from "./routes/create_transaction";
import { connectBankerToClientRouter } from "./routes/connect_banker_to_client"; 
import { deleteClientRouter } from "./routes/delete_client";
import { fetchClientRouter } from "./routes/fetch_clients";
const app = express();

AppDataSource.initialize();  

app.use(express.json());

app.use(createClientRouter)
app.use(createBankerRouter)
app.use(createTransactiontRouter)
app.use(connectBankerToClientRouter)
app.use(deleteClientRouter)
app.use(fetchClientRouter)
app.listen(8081,()=>{
    console.log("app started on 8081");
}) 

