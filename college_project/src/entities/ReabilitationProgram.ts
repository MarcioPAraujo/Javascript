import{

    Entity,
    PrimaryColumn,
    Column,
    DeleteDateColumn,
    CreateDateColumn,
    UpdateDateColumn

}from 'typeorm'
import {v4 as uuid} from 'uuid'

@Entity('reabilitationProgram')
class ReabilitationProgram{

    @PrimaryColumn()
        readonly id!:string
    @Column()
        task!:string

    @Column()
        timesPerWeek!:number

    @Column()
        duration!:string

    @Column()
        subjectOfStudy!:string

    @Column()
        responsable!:string

    @CreateDateColumn()  
    created_at!:Date
    @DeleteDateColumn()
    deleted_at!:Date
    @UpdateDateColumn()
        updated_at:Date


    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
export{ReabilitationProgram}