import{

    Entity,
    PrimaryColumn,
    Column,
    DeleteDateColumn,
    CreateDateColumn,
    UpdateDateColumn

}from 'typeorm'
import {v4 as uuid} from 'uuid'

@Entity('jail')
class Jail{
    @PrimaryColumn()
        readonly id!:string

    @Column()
        capacity!:number

    @Column()
        jailNumber!:string

    @Column()
        securityLevel!:string

    @Column()
        responsibleGuard!:string

    @Column()
        confortLevel!:string

    @CreateDateColumn()  
        created_at!:Date
    @DeleteDateColumn()
        deleted_at!:Date
    @UpdateDateColumn()
        updated_at!:Date

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export{Jail}