import{

    Entity,
    PrimaryColumn,
    Column,
    DeleteDateColumn,
    CreateDateColumn

}from 'typeorm'
import {v4 as uuid} from 'uuid'

@Entity('reabilitationProgram')
class ReabilitationProgram{

    @PrimaryColumn()
        readonly id!:string
    @Column()
        task!:string

    @Column()
        times_per_week!:number

    @Column()
        duration!:string

    @Column()
        subject_of_study!:string

    @Column()
        responsable!:string

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
export{ReabilitationProgram}