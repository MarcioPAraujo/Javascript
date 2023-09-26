import{

    Entity,
    PrimaryColumn,
    Column,
    DeleteDateColumn,
    CreateDateColumn,
    UpdateDateColumn

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
        reabilitationProgram!:string

    @Column()
        prision!:string

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
export{CriminalRecord}