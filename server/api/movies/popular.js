export default defineEventHandler(async event => {
    const config = useRuntimeConfig(event)
    const { AccessToken } = config
    const popularMoviesUrl = 'https://api.themoviedb.org/3/movie/popular'
    const popularSeriesUrl = 'https://api.themoviedb.org/3/tv/popular'

    const popularMovies = await $fetch(popularMoviesUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        },
        query: {
            include_adult: false,
            include_video: false,
            language: 'en-US',
            page: '1',
            sort_by: 'popularity.desc'
        }
    })

    const popularSeries = await $fetch(popularSeriesUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        }
    })

    return { popularMovies, popularSeries }

})

