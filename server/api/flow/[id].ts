import { createCrudByIdHandler } from '~~/server/utils/crudHandlerById'
import type { flow } from '~~/types/flow'

export default createCrudByIdHandler<flow>('Flow')
