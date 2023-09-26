import{

    Entity,
    PrimaryColumn,
    Column,
    DeleteDateColumn,
    CreateDateColumn

}from 'typeorm'
import {v4 as uuid} from 'uuid'

@Entity('criminalRecord')
class CriminalRecord{

    @PrimaryColumn()
        readonly id!:string
    @Column()
        prisoner!:string

    @Column()
        sentence!:string

    @Column()
        section!:string

    @Column()
        reabiitation_program!:string

    @Column()
        prision!:string

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
export{CriminalRecord}