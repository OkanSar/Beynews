import { serverSupabaseClient } from '#supabase/server'
import { H3Event } from 'h3'

export function createCrudByIdHandler<T>(table: string) {
    return defineEventHandler(async (event: H3Event) => {
        const client = await serverSupabaseClient<T>(event)
        const id = event.context.params?.id
        if (!id) throw createError({ statusCode: 400, statusMessage: 'ID param missing' })

        if (event.node.req.method === 'GET') {
            const { data, error } = await client.from(table).select('*').eq('id', id as any).single()
            if (error) throw createError({ statusCode: 404, statusMessage: error.message })
            return data
        }

        if (event.node.req.method === 'PUT') {
            const body = await readBody<Partial<T>>(event)
            const { data, error } = await client.from(table).update(body as any).eq('id', id as any).select()
            if (error) throw createError({ statusCode: 500, statusMessage: error.message })
            return data
        }

        if (event.node.req.method === 'DELETE') {
            const { error } = await client.from(table).delete().eq('id', id as any)
            if (error) throw createError({ statusCode: 500, statusMessage: error.message })
            return { success: true }
        }

        throw createError({ statusCode: 405, statusMessage: 'Method not allowed' })
    })
}
