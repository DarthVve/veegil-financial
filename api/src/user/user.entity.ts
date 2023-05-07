import { Entity, ObjectIdColumn, PrimaryColumn, Column } from "typeorm";

@Entity()
export class User {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    fullname: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    wallet: number;

    @Column()
    password: string;
};