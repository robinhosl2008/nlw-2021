import { Router } from "express";
import { CreateTagController } from "./controllers/tags/CreateTagController";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { ListUserController } from "./controllers/users/ListUserController";

const router = Router();

/**
 * Users
 */

const listUserController = new ListUserController();
const createUserController = new CreateUserController();

router.get("/users/:name?", listUserController.handle)
router.post("/users", createUserController.handle);

/**
 * Tags
 */

const createTagController = new CreateTagController();

router.post("/tags", createTagController.handle);

export { router };