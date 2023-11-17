import{
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
}from "typeorm"
import {v4 as uuid} from "uuid"
import { Jail } from "./Jail"
import { ReabilitationProgram } from "./ReabilitationProgram"
import { Prision } from "./Prision"
import { CriminalRecord } from "./CriminalRecord"

@Entity('prisoner')
class Prisoner{
    @PrimaryColumn()
    readonly id!: string

    @Column()
        name!:string

    @Column()
        height!:number

    @Column()
        weight!:number

    @Column()
        age!:number
    
    @Column()
        nationality!:string

    @ManyToOne(()=>Jail)    
    @JoinColumn()
    jail!:Jail

    @ManyToOne(()=>ReabilitationProgram)
    @JoinColumn()
    reabilitationProgram!:ReabilitationProgram



    @ManyToOne(()=>CriminalRecord)
    @JoinColumn()
    criminalRecord!:CriminalRecord

    
    @CreateDateColumn()
        created_at!: Date
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
export{Prisoner}