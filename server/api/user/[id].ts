import {createCrudByIdHandler} from "~~/server/utils/crudHandlerById";
import {user} from "~~/types/users";

export default createCrudByIdHandler<user>("users");
