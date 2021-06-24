import { Router } from "express";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { ListUserController } from "./controllers/users/ListUserController";

const router = Router();
const listUserController = new ListUserController();
const createUserController = new CreateUserController();

/**
 * Users
 */
router.get("/users/:name?", listUserController.handle)
router.post("/users", createUserController.handle);

export { router };