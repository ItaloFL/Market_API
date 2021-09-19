import { Router } from "express";
import { CreateUserController } from "../../../../modules/accounts/UseCases/createUser/CreateUserController";
import { ProfileUserController } from "../../../../modules/accounts/UseCases/profileUser/ProfileUserController";

const userRoutes = Router()

const createUserController = new CreateUserController()
const profileUserUseCase = new ProfileUserController()

userRoutes.post("/users", createUserController.handle)
userRoutes.get("/profile", profileUserUseCase.handle)


export { userRoutes }