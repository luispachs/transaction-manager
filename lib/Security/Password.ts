import {createHash} from "node:crypto";
export class Password{
    static hash(password:string):string{
        const hash = createHash(process.env.ALGT!,{})
        hash.update(password +":"+process.env.SALT!);
        return hash.digest('hex');
    }

    static validate(password:string,hashPassword:string):boolean{
        const hash = Password.hash(password);
        return hash == hashPassword;
    }
}