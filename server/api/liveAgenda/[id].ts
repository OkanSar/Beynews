import {liveAgenda} from '~~/types/liveAgenda'
import {createCrudByIdHandler} from "~~/server/utils/crudHandlerById";

export default createCrudByIdHandler<liveAgenda>('LiveAgenda')