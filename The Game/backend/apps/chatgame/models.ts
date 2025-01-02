// Models for app chatgame

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Question extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    question!: string;

    @Column()
    correct_answer!: string;

    @Column()
    incorrect_answer!: string;
}
