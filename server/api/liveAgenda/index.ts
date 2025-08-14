import {serverSupabaseClient} from "#supabase/server";
import {liveAgenda} from '~~/types/liveAgenda'
import {createCrudHandler} from "~~/server/utils/crudHandler";

export default createCrudHandler<liveAgenda>('LiveAgenda',{
    orderBy: { column: 'date', ascending: false }
})
