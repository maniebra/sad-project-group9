// Models for app scoreboard

import { User } from '@contrib/apps/users/models';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, TableForeignKey, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Scoreboard extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User, { eager: true })
    @JoinColumn({ name: 'user_id'})
    user!: User;

    @Column()
    score!: number;

    @Column()
    played_at!: Date;
}