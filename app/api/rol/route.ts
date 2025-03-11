import {RoleRepository} from "@/lib/Repository/RoleRepository"
 const roleRepository = new RoleRepository();
export async function GET (request:Request) {
    const role = await roleRepository.getAll();
    return Response.json(role);
}