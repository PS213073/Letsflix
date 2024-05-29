export default defineEventHandler(async event => {
    const config = useRuntimeConfig(event)
    const { AccessToken } = config
    const upcomingUrl = 'https://api.themoviedb.org/3/movie/upcoming'

    const upcoming = await $fetch(upcomingUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        }
    })

    return { upcoming }

})

