import {UserRepository} from "@/lib/Repository/UserRepository";
const userRepository = new UserRepository();
export async function GET (request:Request) {
    const users = await userRepository.getAll();
    return Response.json(users);
}