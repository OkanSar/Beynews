import {useSupabaseUser,useSupabaseClient} from "../.nuxt/imports";
import {defineNuxtRouteMiddleware, navigateTo} from "nuxt/app";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = useSupabaseUser()
    const supabase = useSupabaseClient()

    if (!user.value) {
        return navigateTo('/login')
    }

    const { data, error } = await supabase
        .from('users')
        .select('role')
        .eq('id', user.value.id)
        .single()

    if (error || data?.role !== 'admin') {
        return navigateTo('/')
    }
})
