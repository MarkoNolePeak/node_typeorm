import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, BaseEntity} from "typeorm"
import { Banker } from "./Banker";
import { Transaction } from "./Transactions";
import { Person } from "./utils/Person";

@Entity()
export class Client extends Person {

    
    @Column({
        type: "numeric"
    })
    balance: number;

    @Column()
    newField: string;

    @Column({
        default:true,
        name: "active"
    })
    is_active: boolean;

    @Column({
        type:"simple-json",
        nullable:true
    })
    additional_info:{
        age: number;
        hair_color: string
    }

    @Column({
        type:"simple-array",
        nullable:true
    })
    family_members: string[];

    @OneToMany(
        () => Transaction,
        transaction =>transaction.client
    )
    transactions: Transaction[]
    
    @ManyToMany(
        ()=> Banker,
        {
            cascade: true
        }
    )

    bankers: Banker[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

  
}
