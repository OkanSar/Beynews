import {createCrudByIdHandler} from "~~/server/utils/crudHandlerById";
import {tag} from "~~/types/tag";

export default createCrudByIdHandler<tag>('Tags')