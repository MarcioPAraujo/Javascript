import{

    Entity,
    PrimaryColumn,
    Column,
    DeleteDateColumn,
    CreateDateColumn

}from 'typeorm'
import {v4 as uuid} from 'uuid'

@Entity('jail')
class Jail{
    @PrimaryColumn()
        readonly id!:string

    @Column()
        capacity!:number

    @Column()
        jail_number!:string

    @Column()
        security_level!:string

    @Column()
        responsible_guard!:string

    @Column()
        confort_level!:string

    @CreateDateColumn()  
        created_at!:Date
    @DeleteDateColumn()
        deleted_at!:Date

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export{Jail}