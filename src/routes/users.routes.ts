import { Router } from "express";
import multer from "multer";
import uploadConfig from '../config/upload'
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { ListUsersController } from "../modules/accounts/useCases/listUser/ListUsersController";
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))
const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserAvatarControler = new UpdateUserAvatarController();

usersRoutes.use(ensureAuthenticated)

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", listUsersController.handle);
usersRoutes.patch("/avatar",uploadAvatar.single("avatar"), updateUserAvatarControler.handle);

export { usersRoutes };
