import {createCrudHandler} from "~~/server/utils/crudHandler";
import { user } from "~~/types/users";

export default createCrudHandler<user>('Users')