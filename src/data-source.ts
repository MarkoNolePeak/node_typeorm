import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Client } from "./entity/Client"
import { Banker } from "./entity/Banker"
import { Transaction } from "./entity/Transactions"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "nodeuser",
    password: "password",
    database: "CRUDDataBase",
    synchronize: true, 
    logging: false,
    entities: [User,Client, Banker, Transaction],
    migrations: ['src/migration/**/*{.ts,.js}'],
    migrationsTableName: "migrations",
    subscribers: [],
})
