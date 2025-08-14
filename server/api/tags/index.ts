import {createCrudHandler} from "~~/server/utils/crudHandler";
import {tag} from "~~/types/tag";

export default createCrudHandler<tag>('Tags')