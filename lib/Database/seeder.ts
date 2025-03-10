
// @ts-ignore
import {Password} from "../Security/Password.ts";
import {PrismaClient} from '@prisma/client';
// @ts-ignore
import {generateUUID} from "../utils.ts";

const client =new PrismaClient();

async function  main():Promise<void>{

  try{
      /**
       * create predefined roles
       * admin: this role going to uses for create administrator users
       * regular: this role going to uses for create regular users
       */
      let roles = await client.roles.createMany({
          data:[
              {name:"admin"},
              {name:"regular"}
          ]
      });

      let admin = await client.roles.findFirst({where:{name: "admin"}});
      let regular = await client.roles.findFirst({where:{name: "regular"}});
      if(null==admin || null==regular){
          /**
           * if admin o regular are null, throw Error roles are required for next step
           */
          throw new Error("No admin or regular found for this user");
      }

      /**
       * next action going to create permissions for "Regular" and "administration" users
       */
      console.log("Role Admin");
      console.log(admin);
      console.log("Role Regular");
      console.log(regular);
      await client.permissions.createMany({
          data:[
              {
                  rolesId: admin.id,
                  canAccessReports:true,
                  canModifyUsers:true
              },
              {
                  rolesId:regular.id,
                  canAccessReports:false,
                  canModifyUsers:false
              }
          ]
      })

      let uuid = generateUUID();

      await client.users.create({
          data:{
              id: uuid(),
              name:"luis",
              lastname:"pacheco",
              email:"laps1308@gmail.com",
              phone:"573209345419",
              roleId:admin.id,
              password:Password.hash("lapsDev1308")
          }
      })
  }catch (error){
      await client.$executeRawUnsafe("TRUNCATE TABLE roles RESTART IDENTITY CASCADE");
      await client.$executeRawUnsafe("TRUNCATE TABLE permissions RESTART IDENTITY CASCADE");
      await client.$executeRawUnsafe("TRUNCATE TABLE users RESTART IDENTITY CASCADE");

      throw error;
  }
}

 main().then(()=>{
     console.log("Successfully insertion!");
 }).catch(err=>{
     console.log(err);
 });