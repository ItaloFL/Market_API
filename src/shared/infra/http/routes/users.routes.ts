import { Router } from "express";
import { CreateUserController } from "../../../../modules/accounts/UseCases/createUser/CreateUserController";
import { ProfileUserController } from "../../../../modules/accounts/UseCases/profileUser/ProfileUserController";
import { SendMailController } from "../../../../modules/accounts/UseCases/sendMail/SendMailController";
import { UpdateUserController } from "../../../../modules/accounts/UseCases/updateUser/UpdateUserController";
import ensureAuthenticate from "../middlewares/ensureAuthenticate";

const userRoutes = Router()

const createUserController = new CreateUserController()
const profileUserController = new ProfileUserController()
const updateUserController = new UpdateUserController()
const sendMailController = new SendMailController()

userRoutes.post("/users", createUserController.handle)
userRoutes.get("/profile", ensureAuthenticate ,profileUserController.handle)
userRoutes.put("/update", ensureAuthenticate, updateUserController.handle)

userRoutes.post("/forgot", sendMailController.handle)


export { userRoutes }