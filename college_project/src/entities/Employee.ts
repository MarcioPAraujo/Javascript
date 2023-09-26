import{
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
}from "typeorm"
import {v4 as uuid} from "uuid"

@Entity('employees')
class Employee{

    @PrimaryColumn()
        readonly id!: string
    
    @Column()
        name!:string

    @Column() 
        turno!:string

    @Column()
        task!:string

    @Column()
        accessLevel!: string

    @Column() 
        equipament!: string  

    @CreateDateColumn()
        created_at!: Date
    @DeleteDateColumn()
        deleted_at!: Date

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export{Employee}
