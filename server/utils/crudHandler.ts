import { serverSupabaseClient } from '#supabase/server'
import { H3Event } from 'h3'

interface CrudOptions {
    orderBy?: { column: string; ascending?: boolean }
}

export function createCrudHandler<T>(table: string, options?: CrudOptions) {
    return defineEventHandler(async (event: H3Event) => {
        const client = await serverSupabaseClient<T>(event)

        if (event.node.req.method === 'GET') {
            let query = client.from(table).select('*')

            if (options?.orderBy) {
                query = query.order(options.orderBy.column, { ascending: options.orderBy.ascending ?? true })
            }

            const { data, error } = await query
            if (error) throw createError({ statusCode: 500, statusMessage: error.message })
            return data
        }

        if (event.node.req.method === 'POST') {
            const body = await readBody<T>(event)
            const { data, error } = await client.from(table).insert([body] as any).select()
            if (error) throw createError({ statusCode: 500, statusMessage: error.message })
            return data
        }
    })
}
