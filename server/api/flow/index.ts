import {flow} from '~~/types/flow'
import {createCrudHandler} from "~~/server/utils/crudHandler";

export default createCrudHandler<flow>('Flow')