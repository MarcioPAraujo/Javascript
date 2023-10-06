import {MigrationInterface, QueryRunner} from "typeorm";

export class prisionEntities1695414764377 implements MigrationInterface {
    name = 'prisionEntities1695414764377'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "criminalrecord" ("id" character varying NOT NULL, "prisoner" character varying NOT NULL, "sentence" character varying NOT NULL, "section" character varying NOT NULL, "reabilitation_program" character varying NOT NULL, "prision" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_fcc4d089d6aed169e15c1f04acb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employees" ("id" character varying NOT NULL, "name" character varying NOT NULL, "turno" character varying NOT NULL, "task" character varying NOT NULL, "accessLevel" character varying NOT NULL, "equipament" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_b9535a98350d5b26e7eb0c26af4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "jail" ("id" character varying NOT NULL, "capacity" integer NOT NULL, "jail_number" character varying NOT NULL, "security_level" character varying NOT NULL, "responsible_guard" character varying NOT NULL, "confort_level" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_42ce32306a30aac7b65a59cf2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "prisoner" ("id" character varying NOT NULL, "name" character varying NOT NULL, "height" integer NOT NULL, "weight" integer NOT NULL, "age" integer NOT NULL, "nationality" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_4c068e32b4930f506885f4f1c7a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reabilitationprogram" ("id" character varying NOT NULL, "task" character varying NOT NULL, "times_per_week" integer NOT NULL, "duration" character varying NOT NULL, "subject_of_study" character varying NOT NULL, "responsable" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_8cfc3905a0fdb99e12227356400" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "reabilitationProgram"`);
        await queryRunner.query(`DROP TABLE "prisoner"`);
        await queryRunner.query(`DROP TABLE "jail"`);
        await queryRunner.query(`DROP TABLE "employees"`);
        await queryRunner.query(`DROP TABLE "criminalRecord"`);
    }

}
