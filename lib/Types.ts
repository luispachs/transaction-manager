import * as React from "react";
export type FormSubmitionInitialState= {
    message:string;
}
export interface FormSubmitionInitialStateWithStatus extends FormSubmitionInitialState {
    status:number;
}

export interface ReactInputProps extends React.ComponentProps<"input"> {
    variant:any;
    btnSize:any;
}
export type Model = {
    id?:string|number;
}
export interface User extends Model{

    name: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    roleId: bigint;
    emailVerified: Date | null;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface Permissions extends Model{
    roleId?:bigint;
    canAccessReports:boolean;
    canModifyUsers:boolean;
}

export interface Transaction extends Model{
    data: Date;
    amount:number;
    concept:string;
    type:"EGRESS"|"INCOMES"
}

export interface Role extends Model{
    name: string;
    permission?:Permissions;
    status:"ACTIVED"|"DISACTIVED"|"DELETED"
    user:User[];
}

export interface Repository<T extends Model> {
    create:(model:T)=>Promise<object> ;
    update:(id:number|string,model:object)=>Promise<object> ;
    delete:(id:number|string)=>Object;
    find:(id:number|string)=>Promise<object|null>;
}