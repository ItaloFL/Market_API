import { Router } from "express";
import { CreateUserController } from "../../../../modules/accounts/UseCases/createUser/CreateUserController";
import { ProfileUserController } from "../../../../modules/accounts/UseCases/profileUser/ProfileUserController";
import { UpdateUserController } from "../../../../modules/accounts/UseCases/updateUser/UpdateUserController";

const userRoutes = Router()

const createUserController = new CreateUserController()
const profileUserController = new ProfileUserController()
const updateUserController = new UpdateUserController()

userRoutes.post("/users", createUserController.handle)
userRoutes.get("/profile", profileUserController.handle)
userRoutes.put("/update", updateUserController.handle)


export { userRoutes }