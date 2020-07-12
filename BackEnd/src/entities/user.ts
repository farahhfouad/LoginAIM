import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity("user")
export class UserEntity {

    @PrimaryColumn({ length: 35 })
    userName: string;

    @Column()
    password: string



}